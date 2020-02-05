import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';
import { RouterModule } from '@angular/router';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SomeLibService = /** @class */ (function () {
    function SomeLibService() {
    }
    SomeLibService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    SomeLibService.ctorParameters = function () { return []; };
    /** @nocollapse */ SomeLibService.ngInjectableDef = defineInjectable({ factory: function SomeLibService_Factory() { return new SomeLibService(); }, token: SomeLibService, providedIn: "root" });
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
        { type: Component, args: [{
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
        { type: NgModule, args: [{
                    declarations: [SomeLibComponent],
                    imports: [RouterModule.forChild(routes)]
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

export { SomeLibService, SomeLibComponent, SomeLibModule };

//# sourceMappingURL=my-org-some-lib.js.map