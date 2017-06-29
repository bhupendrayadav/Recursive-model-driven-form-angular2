import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsFormArrayComponent } from './questions-form-array.component';

describe('QuestionsFormArrayComponent', () => {
  let component: QuestionsFormArrayComponent;
  let fixture: ComponentFixture<QuestionsFormArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsFormArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsFormArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
