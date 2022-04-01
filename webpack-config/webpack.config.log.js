module.exports = {
   context: "/var/www/html/rncb-portal-mix",
   mode: "development",
   infrastructureLogging: {
      level: "none"
   },
   entry: {
      "/web/js/jquery-3.6.0": [
         "/var/www/html/rncb-portal-mix/source/scripts/jquery-3.6.0.js",
         "/var/www/html/rncb-portal-mix/source/styles/dashboard/index.sass",
         "/var/www/html/rncb-portal-mix/source/styles/fonts.css",
         "/var/www/html/rncb-portal-mix/source/styles/bootstrap-5.1.3.css"
      ],
      "/web/js/bootstrap-5.1.3": [
         "/var/www/html/rncb-portal-mix/source/scripts/bootstrap-5.1.3.js"
      ],
      "/web/js/tmp": [
         "/var/www/html/rncb-portal-mix/source/scripts/tmp.js"
      ],
      "/web/js/dashboard/index": [
         "/var/www/html/rncb-portal-mix/source/scripts/apps/dashboard/app.js"
      ]
   },
   output: {
      hashFunction: "xxhash64",
      path: "/var/www/html/rncb-portal-mix",
      filename: "[name].js",
      publicPath: "/"
   },
   module: {
      rules: [
         {
            test: /\.vue$/,
            use: [
               {
                  loader: "/var/www/html/rncb-portal-mix/node_modules/vue-loader/lib/index.js",
                  options: {}
               }
            ]
         },
         {
            test: /\.html$/,
            resourceQuery: {
               not: [
                  "/\?vue/i"
               ]
            },
            use: [
               {
                  loader: "/var/www/html/rncb-portal-mix/node_modules/html-loader/dist/cjs.js"
               }
            ]
         },
         {
            test: /(\.(png|jpe?g|gif|webp|avif)$|^((?!font).)*\.svg$)/,
            use: [
               {
                  loader: "file-loader",
                  options: {
                     publicPath: "/rncb-portal-mix/web/images",
                     outputPath: "web/images",
                     useRelativePaths: true,
                     esModule: false
                  }
               },
               {
                  loader: "/var/www/html/rncb-portal-mix/node_modules/img-loader/index.js",
                  options: {
                     enabled: true,
                     optipng: {
                        optimizationLevel: 5
                     },
                     mozjpeg: {
                        quality: 80,
                        progressive: true,
                        smooth: 90
                     },
                     gifsicle: {
                        optimizationLevel: 2,
                        colors: 240
                     },
                     svgo: {}
                  }
               }
            ]
         },
         {
            test: /(\.(woff2?|ttf|eot|otf)$|font.*\.svg$)/,
            use: [
               {
                  loader: "file-loader",
                  options: {
                     publicPath: "/rncb-portal-mix/web/fonts",
                     outputPath: "web/fonts",
                     useRelativePaths: true,
                     esModule: false
                  }
               }
            ]
         },
         {
            test: /\.(cur|ani)$/,
            use: [
               {
                  loader: "/var/www/html/rncb-portal-mix/node_modules/file-loader/dist/cjs.js",
                  options: {
                     name: "[name].[ext]?[hash]",
                     publicPath: "/rncb-portal-mix"
                  }
               }
            ]
         },
         {
            test: /\.(cjs|mjs|jsx?|tsx?)$/,
            exclude: /(node_modules|bower_components)/,
            use: [
               {
                  loader: "/var/www/html/rncb-portal-mix/node_modules/babel-loader/lib/index.js",
                  options: {
                     cacheDirectory: true,
                     presets: [
                        {
                           options: {
                              useBuiltIns: "usage",
                              corejs: 3
                           },
                           dirname: "/var/www/html/rncb-portal-mix",
                           file: {
                              request: "@babel/preset-env",
                              resolved: "/var/www/html/rncb-portal-mix/node_modules/@babel/preset-env/lib/index.js"
                           }
                        }
                     ],
                     plugins: [
                        {
                           dirname: "/var/www/html/rncb-portal-mix",
                           file: {
                              request: "@babel/plugin-syntax-dynamic-import",
                              resolved: "/var/www/html/rncb-portal-mix/node_modules/@babel/plugin-syntax-dynamic-import/lib/index.js"
                           }
                        },
                        {
                           dirname: "/var/www/html/rncb-portal-mix",
                           file: {
                              request: "@babel/plugin-proposal-object-rest-spread",
                              resolved: "/var/www/html/rncb-portal-mix/node_modules/@babel/plugin-proposal-object-rest-spread/lib/index.js"
                           }
                        },
                        {
                           options: {
                              helpers: false
                           },
                           dirname: "/var/www/html/rncb-portal-mix",
                           file: {
                              request: "@babel/plugin-transform-runtime",
                              resolved: "/var/www/html/rncb-portal-mix/node_modules/@babel/plugin-transform-runtime/lib/index.js"
                           }
                        }
                     ],
                     assumptions: {},
                     targets: {
                        chrome: "69.0.0"
                     },
                     cloneInputAst: true,
                     babelrc: true,
                     configFile: true,
                     browserslistConfigFile: false,
                     passPerPreset: false,
                     envName: "development",
                     cwd: "/var/www/html/rncb-portal-mix",
                     root: "/var/www/html/rncb-portal-mix",
                     rootMode: "root",
                     babelrcRoots: [
                        ".",
                        "/var/www/html/rncb-portal-mix"
                     ]
                  }
               }
            ]
         },
         {
            test: "/var/www/html/rncb-portal-mix/source/styles/dashboard/index.sass",
            use: [
               {
                  loader: "/var/www/html/rncb-portal-mix/node_modules/mini-css-extract-plugin/dist/loader.js",
                  options: {
                     esModule: true
                  }
               },
               {
                  loader: "/var/www/html/rncb-portal-mix/node_modules/css-loader/dist/cjs.js",
                  options: {
                     sourceMap: true,
                     importLoaders: 1
                  }
               },
               {
                  loader: "/var/www/html/rncb-portal-mix/node_modules/postcss-loader/dist/cjs.js",
                  options: {
                     sourceMap: true,
                     postcssOptions: {
                        plugins: [
                           {
                              postcssPlugin: "autoprefixer",
                              options: {
                                 add: true,
                                 cascade: true,
                                 flexbox: true,
                                 grid: "autoplace",
                                 supports: true,
                                 remove: false
                              }
                           }
                        ],
                        hideNothingWarning: true
                     }
                  }
               },
               {
                  loader: "/var/www/html/rncb-portal-mix/node_modules/resolve-url-loader/index.js",
                  options: {
                     sourceMap: true
                  }
               },
               {
                  loader: "sass-loader",
                  options: {
                     sassOptions: {
                        precision: 8,
                        outputStyle: "expanded"
                     },
                     sourceMap: true
                  }
               }
            ]
         },
         {
            test: "/var/www/html/rncb-portal-mix/source/styles/fonts.css",
            use: [
               {
                  loader: "/var/www/html/rncb-portal-mix/node_modules/mini-css-extract-plugin/dist/loader.js",
                  options: {
                     esModule: true
                  }
               },
               {
                  loader: "/var/www/html/rncb-portal-mix/node_modules/css-loader/dist/cjs.js",
                  options: {
                     sourceMap: true,
                     importLoaders: 1
                  }
               },
               {
                  loader: "/var/www/html/rncb-portal-mix/node_modules/postcss-loader/dist/cjs.js",
                  options: {
                     sourceMap: true,
                     postcssOptions: {
                        plugins: [
                           {
                              postcssPlugin: "autoprefixer"
                           }
                        ],
                        hideNothingWarning: true
                     }
                  }
               }
            ]
         },
         {
            test: "/var/www/html/rncb-portal-mix/source/styles/bootstrap-5.1.3.css",
            use: [
               {
                  loader: "/var/www/html/rncb-portal-mix/node_modules/mini-css-extract-plugin/dist/loader.js",
                  options: {
                     esModule: true
                  }
               },
               {
                  loader: "/var/www/html/rncb-portal-mix/node_modules/css-loader/dist/cjs.js",
                  options: {
                     sourceMap: true,
                     importLoaders: 1
                  }
               },
               {
                  loader: "/var/www/html/rncb-portal-mix/node_modules/postcss-loader/dist/cjs.js",
                  options: {
                     sourceMap: true,
                     postcssOptions: {
                        plugins: [
                           {
                              postcssPlugin: "autoprefixer"
                           }
                        ],
                        hideNothingWarning: true
                     }
                  }
               }
            ]
         },
         {
            test: /\.p?css$/,
            exclude: [
               "/var/www/html/rncb-portal-mix/source/styles/fonts.css",
               "/var/www/html/rncb-portal-mix/source/styles/bootstrap-5.1.3.css"
            ],
            oneOf: [
               {
                  resourceQuery: /module/,
                  use: [
                     {
                        loader: "/var/www/html/rncb-portal-mix/node_modules/mini-css-extract-plugin/dist/loader.js",
                        options: {
                           esModule: true
                        }
                     },
                     {
                        loader: "/var/www/html/rncb-portal-mix/node_modules/css-loader/dist/cjs.js",
                        options: {
                           modules: {
                              mode: "local",
                              localIdentName: "[hash:base64]"
                           }
                        }
                     },
                     {
                        loader: "/var/www/html/rncb-portal-mix/node_modules/postcss-loader/dist/cjs.js",
                        options: {
                           postcssOptions: {
                              plugins: [
                                 {
                                    postcssPlugin: "autoprefixer"
                                 }
                              ],
                              hideNothingWarning: true
                           }
                        }
                     }
                  ]
               },
               {
                  use: [
                     {
                        loader: "/var/www/html/rncb-portal-mix/node_modules/mini-css-extract-plugin/dist/loader.js",
                        options: {
                           esModule: true
                        }
                     },
                     {
                        loader: "/var/www/html/rncb-portal-mix/node_modules/css-loader/dist/cjs.js",
                        options: {
                           modules: {
                              mode: "local",
                              auto: true,
                              localIdentName: "[hash:base64]"
                           }
                        }
                     },
                     {
                        loader: "/var/www/html/rncb-portal-mix/node_modules/postcss-loader/dist/cjs.js",
                        options: {
                           postcssOptions: {
                              plugins: [
                                 {
                                    postcssPlugin: "autoprefixer"
                                 }
                              ],
                              hideNothingWarning: true
                           }
                        }
                     }
                  ]
               }
            ]
         },
         {
            test: /\.scss$/,
            exclude: [
               "/var/www/html/rncb-portal-mix/source/styles/dashboard/index.sass"
            ],
            oneOf: [
               {
                  resourceQuery: /module/,
                  use: [
                     {
                        loader: "/var/www/html/rncb-portal-mix/node_modules/mini-css-extract-plugin/dist/loader.js",
                        options: {
                           esModule: true
                        }
                     },
                     {
                        loader: "/var/www/html/rncb-portal-mix/node_modules/css-loader/dist/cjs.js",
                        options: {
                           modules: {
                              mode: "local",
                              localIdentName: "[hash:base64]"
                           }
                        }
                     },
                     {
                        loader: "/var/www/html/rncb-portal-mix/node_modules/postcss-loader/dist/cjs.js",
                        options: {
                           postcssOptions: {
                              plugins: [
                                 {
                                    postcssPlugin: "autoprefixer"
                                 }
                              ],
                              hideNothingWarning: true
                           }
                        }
                     },
                     {
                        loader: "/var/www/html/rncb-portal-mix/node_modules/sass-loader/dist/cjs.js",
                        options: {
                           sassOptions: {
                              precision: 8,
                              outputStyle: "expanded"
                           }
                        }
                     }
                  ]
               },
               {
                  use: [
                     {
                        loader: "/var/www/html/rncb-portal-mix/node_modules/mini-css-extract-plugin/dist/loader.js",
                        options: {
                           esModule: true
                        }
                     },
                     {
                        loader: "/var/www/html/rncb-portal-mix/node_modules/css-loader/dist/cjs.js",
                        options: {
                           modules: {
                              mode: "local",
                              auto: true,
                              localIdentName: "[hash:base64]"
                           }
                        }
                     },
                     {
                        loader: "/var/www/html/rncb-portal-mix/node_modules/postcss-loader/dist/cjs.js",
                        options: {
                           postcssOptions: {
                              plugins: [
                                 {
                                    postcssPlugin: "autoprefixer"
                                 }
                              ],
                              hideNothingWarning: true
                           }
                        }
                     },
                     null
                  ]
               }
            ]
         },
         {
            test: /\.sass$/,
            exclude: [
               "/var/www/html/rncb-portal-mix/source/styles/dashboard/index.sass"
            ],
            oneOf: [
               {
                  resourceQuery: /module/,
                  use: [
                     {
                        loader: "/var/www/html/rncb-portal-mix/node_modules/mini-css-extract-plugin/dist/loader.js",
                        options: {
                           esModule: true
                        }
                     },
                     {
                        loader: "/var/www/html/rncb-portal-mix/node_modules/css-loader/dist/cjs.js",
                        options: {
                           modules: {
                              mode: "local",
                              localIdentName: "[hash:base64]"
                           }
                        }
                     },
                     {
                        loader: "/var/www/html/rncb-portal-mix/node_modules/postcss-loader/dist/cjs.js",
                        options: {
                           postcssOptions: {
                              plugins: [
                                 {
                                    postcssPlugin: "autoprefixer"
                                 }
                              ],
                              hideNothingWarning: true
                           }
                        }
                     },
                     {
                        loader: "/var/www/html/rncb-portal-mix/node_modules/sass-loader/dist/cjs.js",
                        options: {
                           sassOptions: {
                              precision: 8,
                              outputStyle: "expanded",
                              indentedSyntax: true
                           }
                        }
                     }
                  ]
               },
               {
                  use: [
                     {
                        loader: "/var/www/html/rncb-portal-mix/node_modules/mini-css-extract-plugin/dist/loader.js",
                        options: {
                           esModule: true
                        }
                     },
                     {
                        loader: "/var/www/html/rncb-portal-mix/node_modules/css-loader/dist/cjs.js",
                        options: {
                           modules: {
                              mode: "local",
                              auto: true,
                              localIdentName: "[hash:base64]"
                           }
                        }
                     },
                     {
                        loader: "/var/www/html/rncb-portal-mix/node_modules/postcss-loader/dist/cjs.js",
                        options: {
                           postcssOptions: {
                              plugins: [
                                 {
                                    postcssPlugin: "autoprefixer"
                                 }
                              ],
                              hideNothingWarning: true
                           }
                        }
                     },
                     null
                  ]
               }
            ]
         },
         {
            test: /\.less$/,
            exclude: [],
            oneOf: [
               {
                  resourceQuery: /module/,
                  use: [
                     {
                        loader: "/var/www/html/rncb-portal-mix/node_modules/mini-css-extract-plugin/dist/loader.js",
                        options: {
                           esModule: true
                        }
                     },
                     {
                        loader: "/var/www/html/rncb-portal-mix/node_modules/css-loader/dist/cjs.js",
                        options: {
                           modules: {
                              mode: "local",
                              localIdentName: "[hash:base64]"
                           }
                        }
                     },
                     {
                        loader: "/var/www/html/rncb-portal-mix/node_modules/postcss-loader/dist/cjs.js",
                        options: {
                           postcssOptions: {
                              plugins: [
                                 {
                                    postcssPlugin: "autoprefixer"
                                 }
                              ],
                              hideNothingWarning: true
                           }
                        }
                     },
                     {
                        loader: "less-loader"
                     }
                  ]
               },
               {
                  use: [
                     {
                        loader: "/var/www/html/rncb-portal-mix/node_modules/mini-css-extract-plugin/dist/loader.js",
                        options: {
                           esModule: true
                        }
                     },
                     {
                        loader: "/var/www/html/rncb-portal-mix/node_modules/css-loader/dist/cjs.js",
                        options: {
                           modules: {
                              mode: "local",
                              auto: true,
                              localIdentName: "[hash:base64]"
                           }
                        }
                     },
                     {
                        loader: "/var/www/html/rncb-portal-mix/node_modules/postcss-loader/dist/cjs.js",
                        options: {
                           postcssOptions: {
                              plugins: [
                                 {
                                    postcssPlugin: "autoprefixer"
                                 }
                              ],
                              hideNothingWarning: true
                           }
                        }
                     },
                     null
                  ]
               }
            ]
         },
         {
            test: /\.styl(us)?$/,
            exclude: [],
            oneOf: [
               {
                  resourceQuery: /module/,
                  use: [
                     {
                        loader: "/var/www/html/rncb-portal-mix/node_modules/mini-css-extract-plugin/dist/loader.js",
                        options: {
                           esModule: true
                        }
                     },
                     {
                        loader: "/var/www/html/rncb-portal-mix/node_modules/css-loader/dist/cjs.js",
                        options: {
                           modules: {
                              mode: "local",
                              localIdentName: "[hash:base64]"
                           }
                        }
                     },
                     {
                        loader: "/var/www/html/rncb-portal-mix/node_modules/postcss-loader/dist/cjs.js",
                        options: {
                           postcssOptions: {
                              plugins: [
                                 {
                                    postcssPlugin: "autoprefixer"
                                 }
                              ],
                              hideNothingWarning: true
                           }
                        }
                     },
                     {
                        loader: "stylus-loader"
                     }
                  ]
               },
               {
                  use: [
                     {
                        loader: "/var/www/html/rncb-portal-mix/node_modules/mini-css-extract-plugin/dist/loader.js",
                        options: {
                           esModule: true
                        }
                     },
                     {
                        loader: "/var/www/html/rncb-portal-mix/node_modules/css-loader/dist/cjs.js",
                        options: {
                           modules: {
                              mode: "local",
                              auto: true,
                              localIdentName: "[hash:base64]"
                           }
                        }
                     },
                     {
                        loader: "/var/www/html/rncb-portal-mix/node_modules/postcss-loader/dist/cjs.js",
                        options: {
                           postcssOptions: {
                              plugins: [
                                 {
                                    postcssPlugin: "autoprefixer"
                                 }
                              ],
                              hideNothingWarning: true
                           }
                        }
                     },
                     null
                  ]
               }
            ]
         },
         {
            test: /\.(mp3|wav|ogg)$/,
            use: [
               {
                  loader: "file-loader",
                  options: {
                     outputPath: "web/sounds",
                     publicPath: "/rncb-portal-mix/web/sounds",
                     useRelativePaths: true,
                     esModule: false
                  }
               }
            ]
         }
      ]
   },
   plugins: [
      {
         envPath: "/var/www/html/rncb-portal-mix/.env",
         additionalEnv: {
            NODE_ENV: "development"
         }
      },
      {
         mix: {
            config: {
               production: false,
               hmr: false,
               hmrOptions: {
                  https: false,
                  host: "localhost",
                  port: "8080"
               },
               postCss: [],
               publicPath: "",
               runtimeChunkPath: null,
               notifications: {
                  onSuccess: true,
                  onFailure: true
               },
               sourcemaps: "inline-source-map",
               resourceRoot: "/rncb-portal-mix",
               fileLoaderDirs: {
                  images: "images",
                  fonts: "fonts"
               },
               processCssUrls: true,
               terser: {
                  parallel: true,
                  terserOptions: {
                     compress: true,
                     output: {
                        comments: false
                     }
                  }
               },
               cssNano: {},
               cleanCss: {},
               webpackConfig: {},
               babelConfig: {
                  presets: [
                     [
                        "@babel/preset-env",
                        null
                     ]
                  ]
               },
               clearConsole: true,
               legacyNodePolyfills: true,
               manifest: "mix-manifest.json",
               cssModuleIdentifier: "[hash:base64]"
            },
            chunks: {
               chunks: {
                  "styles-web/css/fonts": {
                     name: "web/css/fonts",
                     chunks: "all",
                     enforce: true,
                     type: "css/mini-extract"
                  },
                  "styles-web/css/bootstrap-5.1.3": {
                     name: "web/css/bootstrap-5.1.3",
                     chunks: "all",
                     enforce: true,
                     type: "css/mini-extract"
                  },
                  "styles-web/css/dashboard/index": {
                     name: "web/css/dashboard/index",
                     chunks: "all",
                     enforce: true,
                     type: "css/mini-extract"
                  },
                  "styles-vue": {
                     name: "web/css/dashboard/index",
                     chunks: "all",
                     enforce: true,
                     type: "css/mini-extract"
                  },
                  "styles-jsx": {
                     name: "web/css/dashboard/index",
                     chunks: "all",
                     enforce: true,
                     type: "css/mini-extract"
                  }
               },
               entry: null,
               runtime: false
            },
            components: {
               components: []
            },
            dispatcher: {
               events: {
                  init: [
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null
                  ],
                  "internal:gather-dependencies": [
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null
                  ],
                  configReadyForUser: [
                     null
                  ],
                  "loading-entry": [
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null
                  ],
                  "loading-rules": [
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null
                  ],
                  "loading-plugins": [
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null
                  ],
                  configReady: [
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null,
                     null
                  ]
               }
            },
            manifest: {
               manifest: {},
               name: "mix-manifest.json"
            },
            paths: {
               rootPath: "/var/www/html/rncb-portal-mix"
            },
            registrar: {
               components: {}
            },
            webpackConfig: {},
            hot: {},
            resolver: {
               aliases: {}
            },
            dependencies: {
               items: [
                  {
                     package: "sass-loader@^12.1.0",
                     name: "sass-loader"
                  },
                  {
                     package: "sass",
                     name: "sass"
                  },
                  {
                     package: "resolve-url-loader@^5.0.0",
                     name: "resolve-url-loader"
                  },
                  {
                     package: "postcss@^8.3.1",
                     name: "postcss"
                  },
                  {
                     package: "vue-template-compiler",
                     name: "vue-template-compiler"
                  },
                  {
                     package: "vue-loader@^15.9.7",
                     name: "vue-loader"
                  },
                  {
                     package: "process",
                     name: "process"
                  },
                  {
                     package: "buffer",
                     name: "buffer"
                  },
                  {
                     package: "core-js",
                     name: "core-js"
                  },
                  {
                     package: "regenerator-runtime",
                     name: "regenerator-runtime"
                  }
               ],
               requiresReload: true
            },
            tasks: [],
            booted: true,
            bundlingJavaScript: true,
            initialized: true,
            globalStyles: null,
            extractingStyles: true
         }
      },
      {},
      {},
      {
         options: {
            clearConsole: true,
            showRelated: true
         },
         patched: false
      },
      {
         profile: false,
         modulesCount: 5000,
         dependenciesCount: 10000,
         showEntries: true,
         showModules: true,
         showDependencies: true,
         showActiveModules: true,
         options: {
            name: "Mix",
            color: "green",
            reporters: [
               "fancy"
            ],
            reporter: null
         },
         reporters: [
            {}
         ]
      },
      {
         _sortedModulesCache: {},
         options: {
            filename: "[name].css",
            ignoreOrder: false,
            experimentalUseImportModule: false,
            chunkFilename: "[name].css"
         },
         runtimeOptions: {
            linkType: "text/css"
         }
      },
      {},
      {},
      {
         options: {
            appID: "Laravel Mix",
            title: "Laravel Mix",
            alwaysNotify: true,
            timeout: false,
            hint: "int:transient:1",
            contentImage: "/var/www/html/rncb-portal-mix/node_modules/laravel-mix/icons/laravel.png"
         },
         lastBuildSucceeded: false,
         isFirstBuild: true
      },
      {
         definitions: {
            Buffer: [
               "buffer",
               "Buffer"
            ],
            process: "process/browser.js"
         }
      },
      {
         dangerouslyAllowCleanPatternsOutsideProject: false,
         dry: false,
         verbose: false,
         cleanStaleWebpackAssets: true,
         protectWebpackAssets: true,
         cleanAfterEveryBuildPatterns: [],
         cleanOnceBeforeBuildPatterns: [
            "/var/www/html/rncb-portal-mix/web/**/*"
         ],
         currentAssets: [],
         initialClean: false,
         outputPath: ""
      }
   ],
   resolve: {
      extensions: [
         "*",
         ".wasm",
         ".mjs",
         ".js",
         ".jsx",
         ".json",
         ".vue"
      ],
      roots: [
         "/var/www/html/rncb-portal-mix"
      ],
      alias: {
         "@components": "/var/www/html/rncb-portal-mix/source/scripts/components",
         "~components": "/var/www/html/rncb-portal-mix/source/scripts/components",
         "@apps": "/var/www/html/rncb-portal-mix/source/scripts/apps",
         "~apps": "/var/www/html/rncb-portal-mix/source/scripts/apps",
         "@images": "/var/www/html/rncb-portal-mix/source/assets/images",
         "~images": "/var/www/html/rncb-portal-mix/source/assets/images",
         "@fonts": "/var/www/html/rncb-portal-mix/source/assets/fonts",
         "~fonts": "/var/www/html/rncb-portal-mix/source/assets/fonts",
         "@sounds": "/var/www/html/rncb-portal-mix/source/assets/sounds",
         "~sounds": "/var/www/html/rncb-portal-mix/source/assets/sounds",
         "@files": "/var/www/html/rncb-portal-mix/source/assets/files",
         "~files": "/var/www/html/rncb-portal-mix/source/assets/files",
         vue$: "vue/dist/vue.esm.js"
      }
   },
   stats: {
      preset: "errors-warnings",
      performance: false
   },
   performance: {
      hints: false
   },
   optimization: {
      splitChunks: {
         cacheGroups: {
            default: false,
            defaultVendors: false,
            "styles-web/css/fonts": {
               name: "web/css/fonts",
               chunks: "all",
               enforce: true,
               type: "css/mini-extract"
            },
            "styles-web/css/bootstrap-5.1.3": {
               name: "web/css/bootstrap-5.1.3",
               chunks: "all",
               enforce: true,
               type: "css/mini-extract"
            },
            "styles-web/css/dashboard/index": {
               name: "web/css/dashboard/index",
               chunks: "all",
               enforce: true,
               type: "css/mini-extract"
            },
            "styles-vue": {
               name: "web/css/dashboard/index",
               chunks: "all",
               enforce: true,
               type: "css/mini-extract"
            },
            "styles-jsx": {
               name: "web/css/dashboard/index",
               chunks: "all",
               enforce: true,
               type: "css/mini-extract"
            }
         }
      }
   },
   devtool: "inline-source-map",
   devServer: {
      headers: {
         "Access-Control-Allow-Origin": "*"
      },
      static: "/var/www/html/rncb-portal-mix",
      historyApiFallback: true,
      compress: true,
      allowedHosts: "all"
   },
   watchOptions: {
      ignored: "/node_modules/"
   }
};