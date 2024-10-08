import { Component, OnInit } from '@angular/core';
import { CampaignService, Campaign } from '../../core/services/campaign-service.service';
import { CommonModule } from '@angular/common';
import { CampaignsComponent } from '../campaigns/campaigns.component';

@Component({
  selector: 'app-campaign-list-component',
  standalone: true,
  imports: [CommonModule, CampaignsComponent],
  templateUrl: './campaign-list-component.component.html',
  styleUrls: ['./campaign-list-component.component.sass']
})
export class CampaignListComponent implements OnInit {
  visibleCampaigns: Campaign[] = [];

  constructor(private campaignService: CampaignService) { }

  ngOnInit() {
    this.campaignService.getCampaigns().subscribe(campaigns => {
      
      this.visibleCampaigns = campaigns.slice(0, 3);
    });
  }
}
