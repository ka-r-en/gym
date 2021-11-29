import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDietacompletadaComponent } from './editar-dietacompletada.component';

describe('EditarDietacompletadaComponent', () => {
  let component: EditarDietacompletadaComponent;
  let fixture: ComponentFixture<EditarDietacompletadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarDietacompletadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarDietacompletadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
