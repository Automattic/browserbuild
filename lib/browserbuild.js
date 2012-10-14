var fs = require('fs'),
    path = require('path'),
    debug = require('debug')('browserbuild');

// source for client-side require
var requireCode = fs.readFileSync(__dirname + '/require.js', 'utf8')
  .replace(/\/*([^/]+)\/\n/g, '')
  .replace(/\n/g, '')
  .replace(/ +/g, ' ');

var debugCode = fs.readFileSync(__dirname + '/../support/debug/debug.js', 'utf8');

function Renderer(options) {
  this.options = options || {};
  this.paths = [];
};

Renderer.prototype.set = function(key, val){
  this.options[key] = val;
  return this;
};

Renderer.prototype.include = function(filepath){
  if(!filepath) return this;
  var self = this,
      paths = (Array.isArray(filepath) ? filepath : [ filepath ]);

  paths.forEach(function(p) {
    var isDirectory = fs.statSync(p).isDirectory();
    if (isDirectory) {
      return fs.readdirSync(p).forEach(function (f) {
        self.include(p + '/' + f);
      });
    }
    self.paths.push(p);
  });
  return this;
};

Renderer.prototype.render = function(done){
  if(!done) return this;
  var self = this,
      opt = this.options,
      mod = path.basename(opt.main);

  var data = '(function(){'
    + 'var global = this;'
    + (opt.debug ? debugCode : 'function debug(){return debug};')
    + requireCode
    + this.paths.sort().reduce(function(str, path) {
        return str + self._render(path);
      }, '')
    + 'var exp = require(\'' + mod + '\');'
    + 'if ("undefined" != typeof module) module.exports = exp;'
    + 'else ' + (opt.global || opt.main) + ' = exp;\n'
    + '})();';

  done(undefined, data);
};

Renderer.prototype._render = function(filepath) {
  var basepath = this.options.basepath
    , source = fs.readFileSync(filepath, 'utf8')

  // match a basepath
  basepath.some(function(base){
    if (base == filepath.substr(0, base.length)) {
      filepath = filepath.substr(base.length);
      return true;
    }
  })

  // remove `if node`
  var ignoring = false

  source = source.split('\n').map(function (line, i) {
    if (ignoring) {
      if (/^ *\/\/ *end/.test(line)) {
        ignoring = false;
      }
      return '';
    } else {
      if (/^ *\/\/ *if *node/.test(line)) {
        debug('[%s] skipping node-only code at line %d'
          , path.basename(filepath), i + 1);
        ignoring = true;
        return '';
      } else {
        return line;
      }
    }
  }).join('\n');

  // wrap
  return 'require.register("' + filepath + '", '
    + 'function(module, exports, require, global){\n' + source + '\n});';
};

function render(paths, options, fn) {
  if ('function' == typeof options) fn = options, options = {};
  return new Renderer(options).include(paths).render(fn);
};

// e.g. browserbuild(paths, options).set(key, val).include(paths).render(fn)
exports = module.exports = render;
// e.g. browserbuild.render(paths, options, fn)
exports.render = render;
