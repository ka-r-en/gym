import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarAvanceComponent } from './agregar-avance.component';

describe('AgregarAvanceComponent', () => {
  let component: AgregarAvanceComponent;
  let fixture: ComponentFixture<AgregarAvanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarAvanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarAvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
