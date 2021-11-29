import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEntrenadorComponent } from './agregar-entrenador.component';

describe('AgregarEntrenadorComponent', () => {
  let component: AgregarEntrenadorComponent;
  let fixture: ComponentFixture<AgregarEntrenadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEntrenadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarEntrenadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
