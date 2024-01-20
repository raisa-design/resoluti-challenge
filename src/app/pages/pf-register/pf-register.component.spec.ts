import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PfRegisterComponent } from './pf-register.component';

describe('PfRegisterComponent', () => {
  let component: PfRegisterComponent;
  let fixture: ComponentFixture<PfRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PfRegisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PfRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
