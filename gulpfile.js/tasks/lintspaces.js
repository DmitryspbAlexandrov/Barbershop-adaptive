'use strict';

const settings = require('../settings');
const {
  task,
  src
} = require('gulp');
const lintspaces = require('gulp-lintspaces');

// Линтинг в соответствии с настройками .editorconfig
task('lintspaces', function () {
  return src([
      '*.json',
      '*.md',
      './gulpfile.js/**/*.js',
      `${settings.paths.src.root}*.html`,
      `${settings.paths.src.scripts}**/*.js`,
      `${settings.paths.src.images}**/*.svg`,
      `${settings.paths.src.styles}**/*.scss`
    ])
    .pipe(lintspaces({
      editorconfig: '.editorconfig'
    }))
    .pipe(lintspaces.reporter());
});
