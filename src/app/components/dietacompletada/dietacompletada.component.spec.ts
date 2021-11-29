import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietacompletadaComponent } from './dietacompletada.component';

describe('DietacompletadaComponent', () => {
  let component: DietacompletadaComponent;
  let fixture: ComponentFixture<DietacompletadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DietacompletadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DietacompletadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
