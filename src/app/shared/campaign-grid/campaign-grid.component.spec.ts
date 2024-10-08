import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignGridComponent } from './campaign-grid.component';

describe('CampaignGridComponent', () => {
  let component: CampaignGridComponent;
  let fixture: ComponentFixture<CampaignGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampaignGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CampaignGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
