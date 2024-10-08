import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignListComponentComponent } from './campaign-list-component.component';

describe('CampaignListComponentComponent', () => {
  let component: CampaignListComponentComponent;
  let fixture: ComponentFixture<CampaignListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampaignListComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CampaignListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
