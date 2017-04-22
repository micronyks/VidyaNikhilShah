/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the a  pp folder
            app: 'app',

            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            //'@angular/router': 'https://unpkg.com/@angular/router@next/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

            '@angular/animations': 'npm:@angular/animations/bundles/animations.umd.js',
            '@angular/platform-browser/animations': 'npm:@angular/platform-browser/bundles/platform-browser-animations.umd.js',
            '@angular/animations/browser': 'npm:@angular/animations/bundles/animations-browser.umd.js',
            // other libraries
            'rxjs': 'npm:rxjs',
            'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
            /* material desing */
            '@angular/material': 'npm:@angular/material/bundles/material.umd.js',
            //'@angular2-material/core': 'npm:@angular2-material/core/core.umd.js',
            // '@angular2-material/button': 'npm:@angular2-material/button/button.umd.js',
            // '@angular2-material/menu': 'npm:@angular2-material/menu/menu.umd.js',
            // '@angular2-material/icon': 'npm:@angular2-material/icon/icon.umd.js',
            // '@angular2-material/sidenav': 'npm:@angular2-material/sidenav/sidenav.umd.js',
            // '@angular2-material/toolbar': 'npm:@angular2-material/toolbar/toolbar.umd.js',
            // '@angular2-material/card': 'npm:@angular2-material/card/card.umd.js',
            // '@angular2-material/input': 'npm:@angular2-material/input/input.umd.js',
            // 'jquery': 'npm:jquery/dist/jquery.min.js',
            // 'bootstrap': 'npm:boostrap/dist/bootstrap.min.js',
            'primeng': 'npm:primeng',
            // ng2-bootstrap
            'moment': 'node_modules/moment',
            'ng2-bootstrap': 'node_modules/ng2-bootstrap',
            'angular2-google-maps/core': 'node_modules/angular2-google-maps/core/core.umd.js'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                defaultExtension: 'js',
                meta: {
                    './*.js': {
                        loader: 'systemjs-angular-loader.js'
                    }
                }
            },
            rxjs: {
                defaultExtension: 'js'
            },
            primeng: {
                defaultExtension: 'js'
            },
            // ng2-bootstrap
            'ng2-bootstrap': { format: 'cjs', main: 'bundles/ng2-bootstrap.umd.js', defaultExtension: 'js' },
            'moment': { main: 'moment.js', defaultExtension: 'js' },
        }
    });
})(this);