import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from '../services/authentication/auth.service';

@Directive({
    selector: '[hasAnyPermission]',
    standalone:true
})
export class HasAnyPermissionDirective {
    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
        private authService: AuthService) { }

    @Input() set hasAnyPermission(role: string[]) {
        if (this.authService.hasAnyPermission(role)) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
            this.viewContainer.clear();
        }
    }
}