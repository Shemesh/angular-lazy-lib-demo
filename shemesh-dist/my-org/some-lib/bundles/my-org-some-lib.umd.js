(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('@my-org/some-lib', ['exports', '@angular/core', '@angular/router'], factory) :
    (factory((global['my-org'] = global['my-org'] || {}, global['my-org']['some-lib'] = {}),global.ng.core,global.ng.router));
}(this, (function (exports,i0,router) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SomeLibService = /** @class */ (function () {
        function SomeLibService() {
        }
        SomeLibService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        SomeLibService.ctorParameters = function () { return []; };
        /** @nocollapse */ SomeLibService.ngInjectableDef = i0.defineInjectable({ factory: function SomeLibService_Factory() { return new SomeLibService(); }, token: SomeLibService, providedIn: "root" });
        return SomeLibService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SomeLibComponent = /** @class */ (function () {
        function SomeLibComponent() {
        }
        /**
         * @return {?}
         */
        SomeLibComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SomeLibComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-some-lib',
                        template: "\n    <p>\n      some-lib works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        SomeLibComponent.ctorParameters = function () { return []; };
        return SomeLibComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var routes = [
        {
            path: '',
            component: SomeLibComponent
        }
    ];
    var SomeLibModule = /** @class */ (function () {
        function SomeLibModule() {
        }
        SomeLibModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [SomeLibComponent],
                        imports: [router.RouterModule.forChild(routes)]
                    },] }
        ];
        return SomeLibModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.SomeLibService = SomeLibService;
    exports.SomeLibComponent = SomeLibComponent;
    exports.SomeLibModule = SomeLibModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=my-org-some-lib.umd.js.map