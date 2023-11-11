import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVeiculosComponent } from './form-veiculos.component';

describe('FormVeiculosComponent', () => {
  let component: FormVeiculosComponent;
  let fixture: ComponentFixture<FormVeiculosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormVeiculosComponent]
    });
    fixture = TestBed.createComponent(FormVeiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
