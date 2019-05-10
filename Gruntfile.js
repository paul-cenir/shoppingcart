module.exports = function (grunt) {
    require('jit-grunt')(grunt);
    grunt.initConfig({
        less: {
            target: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    'src/assets/css/global-styles/global-styles.css': [
                        'src/assets/less/compiled-global-styles/global-styles.less'
                    ],
                    'src/assets/css/global-styles/global-styles_mobile.css': [
                        'src/assets/less/compiled-global-styles/global-styles_mobile.less'
                    ],
                    'src/assets/css/page-home/page-home.css': [
                        'src/assets/less/modules/page-home/page-home.less'
                    ],
                    'src/assets/css/page-home/page-home_mobile.css': [
                        'src/assets/less/modules/page-home/page-home-mobile.less'
                    ],
                    'src/assets/css/page-login-signup/page-login-signup.css': [
                        'src/assets/less/modules/page-login-signup/page-login-signup.less'
                    ],
                    'src/assets/css/page-login-signup/page-login-signup_mobile.css': [
                        'src/assets/less/modules/page-login-signup/page-login-signup-mobile.less'
                    ],
                    'src/assets/css/page-product-details/page-product-details.css': [
                        'src/assets/less/modules/page-product-details/page-product-details.less'
                    ],
                    'src/assets/css/page-product-details/page-product-details_mobile.css': [
                        'src/assets/less/modules/page-product-details/page-product-details-mobile.less'
                    ],
                    'src/assets/css/page-not-found/page-not-found.css': [
                        'src/assets/less/modules/page-not-found/page-not-found.less'
                    ],
                    'src/assets/css/page-not-found/page-not-found-mobile.css': [
                        'src/assets/less/modules/page-not-found/page-not-found-mobile.less'
                    ],
                    'src/assets/css/page-empty/page-empty.css': [
                        'src/assets/less/modules/page-empty/page-empty.less'
                    ],
                    'src/assets/css/page-empty/page-empty-mobile.css': [
                        'src/assets/less/modules/page-empty/page-empty-mobile.less'
                    ],
                    'src/assets/css/flow-checkout/flow-checkout.css': [
                        'src/assets/less/modules/flow-checkout/flow-checkout.less'
                    ],
                    'src/assets/css/flow-checkout/flow-checkout-mobile.css': [
                        'src/assets/less/modules/flow-checkout/flow-checkout-mobile.less'
                    ]
                }
            }
        },
        cssmin: {
            target: {
                files: {
                    'src/assets/css_min/global-styles/global-styles.min.css': [
                        'src/assets/css/global-styles/global-styles.css'
                    ],
                    'src/assets/css_min/global-styles/global-styles_mobile.min.css': ['src/assets/css/global-styles/global-styles_mobile.css'],

                    'src/assets/css_min/page-home/page-home.min.css': [
                        'src/assets/css/page-home/page-home.css'
                    ],
                    'src/assets/css_min/page-home/page-home_mobile.min.css': [
                        'src/assets/css/page-home/page-home-mobile.css'
                    ],
                    'src/assets/css_min/page-login-signup/page-login-signup.min.css': [
                        'src/assets/css/page-login-signup/page-login-signup.css'
                    ],
                    'src/assets/css_min/page-login-signup/page-login-signup_mobile.min.css': [
                        'src/assets/css/page-login-signup/page-login-signup-mobile.css'
                    ],
                    'src/assets/css_min/page-product-details/page-product-details.min.css': [
                        'src/assets/css/page-product-details/page-product-details.css'
                    ],
                    'src/assets/css_min/page-product-details/page-product-details_mobile.min.css': [
                        'src/assets/css/page-product-details/page-product-details-mobile.css'
                    ],
                    'src/assets/css_min/flow-checkout/flow-checkout.min.css': [
                        'src/assets/css/flow-checkout/flow-checkout.css'
                    ],
                    'src/assets/css_min/flow-checkout/flow-checkout-mobile.min.css': [
                        'src/assets/css/flow-checkout/flow-checkout-mobile.css'
                    ],
                    'src/assets/css_min/page-not-found/page-not-found.min.css': [
                        'src/assets/css/page-not-found/page-not-found.css'
                    ],
                    'src/assets/css_min/page-not-found/page-not-found-mobile.min.css': [
                        'src/assets/css/page-not-found/page-not-found-mobile.css'
                    ],
                    'src/assets/css_min/page-empty/page-empty.min.css': [
                        'src/assets/css/page-empty/page-empty.css'
                    ],
                    'src/assets/css_min/page-empty/page-empty-mobile.min.css': [
                        'src/assets/css/page-empty/page-empty-mobile.css'
                    ],
                }

            }
        },

        watch: {
            styles: {
                files: ['less/**/*.less'], // which files to watch
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            libraries: {
                files: {
                }
            },
            angular_apps: {
                files: {
                }
            },
            headjs_loaders: {
                files: {
                }
            },
            vanilla_js: {
                files: {
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-less');
    //with watch
    // grunt.registerTask('default', ['less', 'watch']);
    //without  watch
    grunt.registerTask('default', ['less', 'cssmin']);
};