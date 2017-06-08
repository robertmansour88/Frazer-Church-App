/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is variable name for LiturgySchedule folder
            app: 'LiturgySchedule',
            pdf_view: 'PdfView',
            announcements: 'Announcements',
            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',
            // other libraries
            'rxjs': 'npm:rxjs',
            
            "ng2-modal": 'node_modules/ng2-modal',
            "ng2-pdf-viewer": 'node_modules/ng2-pdf-viewer',
            "pdfjs-dist": 'node_modules/pdfjs-dist'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            pdf_view: {
                main: './main.js',
                defaultExtension:'js'
            },
            announcements: {
                main: './main.js',
                defaultExtension: 'js'
            },

            "ng2-modal": {
                main: './index.js',
                defaultExtension: 'js'
            },

            "ng2-pdf-viewer": {
                main: './dist/index.js',
                defaultExtension: 'js'
            },
            "pdfjs-dist": {

                defaultExtension: 'js'
            },

            rxjs: {
                defaultExtension: 'js'
            }
        }
    });
})(this);
