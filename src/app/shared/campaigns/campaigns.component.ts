import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-campaigns',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.sass']
})
export class CampaignsComponent {
  @Input() imageUrl!: string;
  @Input() title!: string;
  @Input() country!: string;
  @Input() amountRaised!: number;
  @Input() currency!: string;
  @Input() donors!: number; 
  @Input() endDate!: string; 

  @Output() viewMore = new EventEmitter<void>();
  @Output() donate = new EventEmitter<void>();
  
  constructor(private router: Router) {}

  navigateToDonar(): void {
    this.router.navigate(['/pay']); 
  }

  navigateToVer(): void {
    this.router.navigate(['/details']); 
  }

  
}
