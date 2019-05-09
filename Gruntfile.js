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
                    'src/assets/css/flow-cart/flow-cart.css': [
                        'src/assets/less/modules/flow-cart/flow-cart.less'
                    ],
                    'src/assets/css/flow-cart/flow-cart-mobile.css': [
                        'src/assets/less/modules/flow-cart/flow-cart-mobile.less'
                    ],
                    'src/assets/css/flow-job-order/flow-job-order.css': [
                        'src/assets/less/modules/flow-job-order/flow-job-order.less'
                    ],
                    'src/assets/css/flow-job-order/flow-job-order-mobile.css': [
                        'src/assets/less/modules/flow-job-order/flow-job-order-mobile.less'
                    ],
                    'src/assets/css/flow-payment/flow-payment.css': [
                        'src/assets/less/modules/flow-payment/flow-payment.less'
                    ],
                    'src/assets/css/flow-payment/flow-payment-mobile.css': [
                        'src/assets/less/modules/flow-payment/flow-payment-mobile.less'
                    ],
                    'src/assets/css/flow-shipment/flow-shipment.css': [
                        'src/assets/less/modules/flow-shipment/flow-shipment.less'
                    ],
                    'src/assets/css/flow-shipment/flow-shipment-mobile.css': [
                        'src/assets/less/modules/flow-shipment/flow-shipment-mobile.less'
                    ],
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
                    'src/assets/css_min/page-home/page-home.css': [
                        'src/assets/css/page-home/page-home.less'
                    ],
                    'src/assets/css_min/page-home/page-home_mobile.css': [
                        'src/assets/css/page-home/page-home-mobile.less'
                    ],
                    'src/assets/css_min/page-login-signup/page-login-signup.css': [
                        'src/assets/css/page-login-signup/page-login-signup.less'
                    ],
                    'src/assets/css_min/page-login-signup/page-login-signup_mobile.css': [
                        'src/assets/css/page-login-signup/page-login-signup-mobile.less'
                    ],
                    'src/assets/css_min/page-product-details/page-product-details.css': [
                        'src/assets/css/page-product-details/page-product-details.less'
                    ],
                    'src/assets/css_min/page-product-details/page-product-details_mobile.css': [
                        'src/assets/css/page-product-details/page-product-details-mobile.less'
                    ],
                    'src/assets/css_min/flow-cart/flow-cart.css': [
                        'src/assets/css/flow-cart/flow-cart.less'
                    ],
                    'src/assets/css_min/flow-cart/flow-cart-mobile.css': [
                        'src/assets/css/flow-cart/flow-cart-mobile.less'
                    ],
                    'src/assets/css_min/flow-job-order/flow-job-order.css': [
                        'src/assets/css/flow-job-order/flow-job-order.less'
                    ],
                    'src/assets/css_min/flow-job-order/flow-job-order-mobile.css': [
                        'src/assets/css/flow-job-order/flow-job-order-mobile.less'
                    ],
                    'src/assets/css_min/flow-payment/flow-payment.css': [
                        'src/assets/css/flow-payment/flow-payment.less'
                    ],
                    'src/assets/css_min/flow-payment/flow-payment-mobile.css': [
                        'src/assets/css/flow-payment/flow-payment-mobile.less'
                    ],
                    'src/assets/css_min/flow-shipment/flow-shipment.css': [
                        'src/assets/css/flow-shipment/flow-shipment.less'
                    ],
                    'src/assets/css_min/flow-shipment/flow-shipment-mobile.css': [
                        'src/assets/css/flow-shipment/flow-shipment-mobile.less'
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