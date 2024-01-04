import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTransladoComponent } from './form-translado.component';

describe('FormTransladoComponent', () => {
  let component: FormTransladoComponent;
  let fixture: ComponentFixture<FormTransladoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormTransladoComponent]
    });
    fixture = TestBed.createComponent(FormTransladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
