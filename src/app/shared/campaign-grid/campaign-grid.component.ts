import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignService, Campaign } from '../../core/services/campaign-service.service';
import { CampaignsComponent } from '../campaigns/campaigns.component';
import { FooterHomeComponent } from '../footer-home/footer-home.component';


@Component({
  selector: 'app-campaign-grid',
  standalone: true,
  imports: [CommonModule, CampaignsComponent, FooterHomeComponent],
  templateUrl: './campaign-grid.component.html',
  styleUrls: ['./campaign-grid.component.sass']
})
export class CampaignGridComponent implements OnInit {
  campaigns: Campaign[] = [];

  constructor(private campaignService: CampaignService) { }

  ngOnInit() {
    this.campaignService.getCampaigns().subscribe(campaigns => {
      this.campaigns = campaigns.slice(0, 9); // Mostrar las primeras 9 campañas
    });
  }
}
