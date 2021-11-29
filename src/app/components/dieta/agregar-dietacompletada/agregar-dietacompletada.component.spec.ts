import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarDietacompletadaComponent } from './agregar-dietacompletada.component';

describe('AgregarDietacompletadaComponent', () => {
  let component: AgregarDietacompletadaComponent;
  let fixture: ComponentFixture<AgregarDietacompletadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarDietacompletadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarDietacompletadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
