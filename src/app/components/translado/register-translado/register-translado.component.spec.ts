import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTransladoComponent } from './register-translado.component';

describe('RegisterTransladoComponent', () => {
  let component: RegisterTransladoComponent;
  let fixture: ComponentFixture<RegisterTransladoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterTransladoComponent]
    });
    fixture = TestBed.createComponent(RegisterTransladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
