import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { RegisterComponent } from './features/register/register.component';
import { HomeComponent } from './features/home/home.component';
import { CampaignGridComponent } from './shared/campaign-grid/campaign-grid.component';
import { CampaignDetailComponent } from './shared/campaign-detail/campaign-detail.component';
import { PaymentFormComponent } from './shared/payment-form/payment-form.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { BankTransferComponent } from './bank-transfer/bank-transfer.component';
import { PayPalComponent } from './paypal/paypal.component';




export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'campaigns', component: CampaignGridComponent },
    {path: 'details', component: CampaignDetailComponent },
    {path: 'pay', component: PaymentFormComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'thank-you', component: ThankYouComponent },
    { path: 'credit-card', component: CreditCardComponent },
    { path: 'paypal', component: PayPalComponent },
    { path: 'bank-transfer', component: BankTransferComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
      path: 'dashboard',
      loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardRoutingModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
