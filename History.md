
0.6.0 / 2012-10-14
==================

  * added support for `module.exports`
  * sort files by name before building. [mixu]

0.5.0 / 2012-07-07
==================

  * Allow for multiple basepaths, separated by a comma. [slaskis]

0.4.8 / 2012-04-03
==================

  * Added debug repository directly to avoid NPM dependency conflicts.

0.4.7 / 2012-04-03
==================

 * Specified visionmedia/debug version.

0.4.6 / 2012-04-02
==================

  * Added parent information to require errors [visionmedia]

0.4.5 / 2012-03-25
==================

  * Fixed directory traversing. [Sembiance]

0.4.4 / 2012-03-25
==================

  * Added back `// if node` support. [Sembiance]
  * Leveraged visionmedia/debug.

0.4.3 / 2012-03-20
==================

  * Added support for `require('debug')` transparently.

0.4.2 / 2012-03-20
==================

  * Fixed debug() interface when debugging is disabled.

0.4.1 / 2012-03-20
==================

  * Avoid whitespace strip for visionmedia/debug

0.4.0 / 2012-03-20
==================

  * Outputs to stdout instead of `dist/`.
  * Instrumentation removed in favor of visionmedia/debug.
  * Accepts a list of files instead of a single directory.
  * Cleaned up README

0.3.1 / 2012-03-09
==================

  * Removed test for validity of global.

0.3.0 / 2012-01-18
==================

  * Added support for `global` pointing to the global object, generally
    `window`.

0.2.1 / 2012-01-16
==================

  * Fixed double quotes in debug statements.

0.2.0 / 2011-12-21
==================

  * Added debugging instrumentatiion functionality (`-i`).

0.1.1 / 2011-12-15
==================

  * Added example for node-only code that gets removed for the build.
  * Added support for `// if node`
  * Fixed `bin` in package.json
  * Corrected credits.
  * Initial release.

0.1.0 / 2011-11-18
==================

  * Initial release.
