import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { NgZorroComponentsModule } from '../../antd-module/ng-zorro-components.module';
import { RouteConfigService } from '../../../core/services/subheader/route-config.service';
import { RouteConfig } from './interfaces/route-config.interface';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-subheader',
  standalone: true,
  imports: [CommonModule, NgZorroComponentsModule, TranslateModule],
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.sass']
})
export class SubheaderComponent implements OnInit {
  public title: string | undefined;
  public descriptions: string | undefined;
  public showSubheader: boolean = true;
  private routesConfig: RouteConfig[] = [];

  constructor(private router: Router, private routeConfigService: RouteConfigService, private translate: TranslateService) {}

  ngOnInit(): void {
    this.routeConfigService.getRouteConfig().subscribe(config => {
      this.routesConfig = config;
      this.updateTextBasedOnUrl();
    });

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateTextBasedOnUrl();
      }
    });

    // Subscribe to language change to update texts dynamically
    this.translate.onLangChange.subscribe(() => {
      this.updateTextBasedOnUrl();
    });
  }

  updateTextBasedOnUrl(): void {
    const currentUrl = this.router.url;
    const routeConfig: RouteConfig | undefined = this.routesConfig.find(config => currentUrl.includes(config.path));

    if (routeConfig) {
      this.showSubheader = routeConfig.showSubheader !== false;
      this.title = routeConfig.title || '';
      this.descriptions = routeConfig.descriptions || '';
    } else {
      this.showSubheader = false;
      this.title = '';
      this.descriptions = '';
    }
  }
}
