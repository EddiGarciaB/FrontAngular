import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroComponentsModule } from '../../antd-module/ng-zorro-components.module';
import { RouterLink } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { MenuItem } from "./interfaces/menuItem.interface";
import { MENU_ITEMS_LIST } from "./mocks/menuList.mock";
import { HasPermissionDirective} from "../../../core/directives/has-permission.directive";
import { HasAnyPermissionDirective} from "../../../core/directives/has-any-permission.directive";
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    NgZorroComponentsModule,
    RouterLink,
    HttpClientModule,
    HasPermissionDirective,
    HasAnyPermissionDirective,
    TranslateModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

  activeSubMenu: number | null = null;
  menuItems: MenuItem[] = [];
  menuItemsLs: MenuItem[] = MENU_ITEMS_LIST;

  @HostListener('document:click', ['$event'])
  handleDocumentClick(event: Event): void {
    const clickedElement = event.target as HTMLElement;
    const clickedInsideSidebarItem = clickedElement.closest('.sidebar-item') !== null;

    if (!clickedInsideSidebarItem) {
      this.activeSubMenu = null;
    }
  }

  toggleSubMenu(num: number): void {
    this.activeSubMenu = this.activeSubMenu === num ? null : num;
  }

  rolesSubmenu(num: number): string[] {
    const roles = [];
    const menu = this.menuItemsLs.find((elem) => elem.activeSubMenu === num);
    if (menu) {
      for (const element of menu.items) {
        roles.push(element.role);
      }
    }
    return roles;
  }

  ngOnInit(): void {
    this.menuItems = this.menuItemsLs;
    this.menuItems.forEach(element => {
      element.subRoles = this.rolesSubmenu(element.activeSubMenu);
    });
  }
}
