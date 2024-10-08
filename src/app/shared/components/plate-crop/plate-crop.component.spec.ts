import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlateCropComponent } from './plate-crop.component';

describe('PlateCropComponent', () => {
  let component: PlateCropComponent;
  let fixture: ComponentFixture<PlateCropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlateCropComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlateCropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
