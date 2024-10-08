import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from '../services/authentication/auth.service';

@Directive({
    selector: '[hasPermission]',
    standalone:true
})
export class HasPermissionDirective {
    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
        private authService: AuthService) { }

    @Input() set hasPermission(role: string) {
        if (this.authService.hasPermission(role)) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
            this.viewContainer.clear();
        }
    }
}