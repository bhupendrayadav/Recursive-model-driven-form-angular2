import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionFormControlComponent } from './question-form-control.component';

describe('QuestionFormControlComponent', () => {
  let component: QuestionFormControlComponent;
  let fixture: ComponentFixture<QuestionFormControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionFormControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
