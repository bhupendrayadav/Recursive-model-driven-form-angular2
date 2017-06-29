import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceFillingComponent } from './choice-filling.component';

describe('ChoiceFillingComponent', () => {
  let component: ChoiceFillingComponent;
  let fixture: ComponentFixture<ChoiceFillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoiceFillingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoiceFillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
