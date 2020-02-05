import { Injectable, NgModule, Component, defineInjectable } from '@angular/core';
import { RouterModule } from '@angular/router';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SomeLibService {
    constructor() { }
}
SomeLibService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
SomeLibService.ctorParameters = () => [];
/** @nocollapse */ SomeLibService.ngInjectableDef = defineInjectable({ factory: function SomeLibService_Factory() { return new SomeLibService(); }, token: SomeLibService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SomeLibComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SomeLibComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-some-lib',
                template: `
    <p>
      some-lib works!
    </p>
  `
            }] }
];
/** @nocollapse */
SomeLibComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const routes = [
    {
        path: '',
        component: SomeLibComponent
    }
];
class SomeLibModule {
}
SomeLibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SomeLibComponent],
                imports: [RouterModule.forChild(routes)]
            },] }
];

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