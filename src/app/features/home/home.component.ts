import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterHomeComponent } from '../../shared/footer-home/footer-home.component';
import { CampaignListComponent } from '../../shared/campaign-list-component/campaign-list-component.component';
import { CardBlogComponent } from '../../shared/card-blog/card-blog.component';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FooterHomeComponent, CampaignListComponent, CardBlogComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {

  termsAccepted: boolean = false; 

  constructor(private router: Router) {}
  
  ngOnInit(): void {
    this.scrollToTop();
  }


  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  navigateToLogin(): void {
    this.router.navigate(['/login']); 
  }
  navigateToRegister(): void {
    this.router.navigate(['/register']); 
  }

  navigateToCompaint(): void {
    this.router.navigate(['/campaigns']); 
  }

  navigateToPay(): void {
    this.router.navigate(['/pay']);
  }

  

}
