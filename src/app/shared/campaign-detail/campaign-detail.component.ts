import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { Router } from '@angular/router';
import { FooterHomeComponent } from '../footer-home/footer-home.component';

@Component({
  selector: 'app-campaign-detail',
  standalone: true,
  imports: [
    CommonModule,
    NzButtonModule,
    NzCardModule,
    NzIconModule, 
    FooterHomeComponent
  ],
  templateUrl: './campaign-detail.component.html',
  styleUrls: ['./campaign-detail.component.sass']
})
export class CampaignDetailComponent {

  constructor(private router: Router) {}
  campaign = {
    title: 'Ayúdame a construir mi escuela gastronómica social',
    imageUrl: 'assets/images/example.png',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. 
    Cras venenatis euismod malesuada. Mauris vehicula magna ut aliquam vulputate. Nam tempor bibendum ligula ut ultricies. 
    Nullam at venenatis ex. Nulla at dignissim ex. Cras non neque et lorem pretium congue sit amet eu lacus. 
    Suspendisse potenti. Etiam vel dolor in urna dapibus imperdiet. Curabitur sagittis volutpat dui vel feugiat.
    Integer fermentum varius metus, nec tempus metus facilisis non. Integer sit amet felis ac erat tristique 
    ultrices vel nec eros. Phasellus in nunc ac felis vestibulum tempus. In hac habitasse platea dictumst.`,
    amountRaised: 134907,
    currency: 'MXN',
    donors: 206,
    endDate: '2021-09-30',
    targetAmount: 200000
  };

  navigateToDonar(): void {
    this.router.navigate(['/pay']); 
  }
}
