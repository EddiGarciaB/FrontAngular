import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmonUsuarioComponent } from './admon-usuario.component';

describe('AdmonUsuarioComponent', () => {
  let component: AdmonUsuarioComponent;
  let fixture: ComponentFixture<AdmonUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmonUsuarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmonUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
