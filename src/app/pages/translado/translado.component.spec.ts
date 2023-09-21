import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransladoComponent } from './translado.component';

describe('TransladoComponent', () => {
  let component: TransladoComponent;
  let fixture: ComponentFixture<TransladoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransladoComponent]
    });
    fixture = TestBed.createComponent(TransladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
