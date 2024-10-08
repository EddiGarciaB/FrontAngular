import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { UsersComponent } from './users/users.component';
import { SafePipe } from '../../core/pipes/safe.pipe';
import { TablaUsuariosComponent } from './tabla-usuarios/tabla-usuarios.component';
import { AdmonUsuarioComponent } from './admon-usuario/admon-usuario.component';
import { DonationFormComponent } from './donation-form/donation-form.component';
import { DonationSummaryComponent } from './donation-summary/donation-summary.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'resumen', component: TablaUsuariosComponent },
      { path: 'users', component: UsersComponent },
      { path: 'admon', component: AdmonUsuarioComponent },
      { path: 'donation', component: DonationFormComponent },
      { path: 'summary', component: DonationSummaryComponent },
      
    ]
  }
];

@NgModule({
  declarations: [SafePipe],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}