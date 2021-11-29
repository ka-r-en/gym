import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEntrenadorComponent } from './editar-entrenador.component';

describe('EditarEntrenadorComponent', () => {
  let component: EditarEntrenadorComponent;
  let fixture: ComponentFixture<EditarEntrenadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarEntrenadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarEntrenadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
