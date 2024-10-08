import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { SubheaderComponent } from '../../shared/components/subheader/subheader.component';
import { IdleService } from '../../core/services/idle/idle.service';
import { Subscription } from 'rxjs';
import { Router, NavigationEnd } from "@angular/router";
import { RouteConfigService } from '../../core/services/subheader/route-config.service';
import { RouteConfig } from '../../shared/components/subheader/interfaces/route-config.interface';

@Component({
  selector: 'my-dashboard',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, SidebarComponent, SubheaderComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit, OnDestroy {

  idleService = inject(IdleService);
  private idleSubscription?: Subscription;
  public showSubheader: boolean = true;
  private routesConfig: RouteConfig[] = [];

  constructor(private router: Router, private routeConfigService: RouteConfigService) {}

  ngOnInit(): void {
    this.routeConfigService.getRouteConfig().subscribe(config => {
      this.routesConfig = config;
      this.updateSubheaderVisibility(this.router.url);
    });

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateSubheaderVisibility(event.url);
      }
    });

    this.idleService.resetTimer();
    this.idleSubscription = this.idleService.idleState.subscribe((isIdle) => {
      if (isIdle) {
        sessionStorage.removeItem('RolesUser');
        sessionStorage.removeItem('infoUser');
        this.router.navigate(['/']);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.idleSubscription) {
      this.idleSubscription.unsubscribe();
    }
  }

  onUserAction() {
    this.idleService.resetTimer();
  }

  updateSubheaderVisibility(url: string): void {
    const routeConfig: RouteConfig | undefined = this.routesConfig.find(config => url.includes(config.path));
    this.showSubheader = routeConfig ? routeConfig.showSubheader !== false : false;
  }
}
