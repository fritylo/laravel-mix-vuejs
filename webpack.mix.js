const { isDev, isProd } = require('./webpack-config/webpack.mix.api');
const { js, css, vue, sass, folder } = require('./webpack-config/webpack.mix.types');
require('./webpack-config/webpack.mix.config');


/*
 * GLOBAL SCRIPTS
 */

js('source/scripts/jquery-3.6.0.js', 'web/js/jquery-3.6.0.js');
js('source/scripts/bootstrap-5.1.3.js', 'web/js/bootstrap-5.1.3.js');
js('source/scripts/tmp.js', 'web/js/tmp.js');


/*
 * GLOBAL STYLES
 */

css('source/styles/fonts.css', 'web/css/fonts.css');
css('source/styles/bootstrap-5.1.3.css', 'web/css/bootstrap-5.1.3.css');



/*
 * VIEWS
 */

vue('source/scripts/apps/dashboard/app.js', 'web/js/dashboard/index.js');


/*
 * STYLES
 */

sass('source/styles/dashboard/index.sass', 'web/css/dashboard/index.css');