import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacaoControllerComponent } from './operacao-controller.component';

describe('OperacaoControllerComponent', () => {
  let component: OperacaoControllerComponent;
  let fixture: ComponentFixture<OperacaoControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperacaoControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperacaoControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
