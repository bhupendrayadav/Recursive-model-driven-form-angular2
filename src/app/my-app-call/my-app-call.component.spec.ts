import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAppCallComponent } from './my-app-call.component';

describe('MyAppCallComponent', () => {
  let component: MyAppCallComponent;
  let fixture: ComponentFixture<MyAppCallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAppCallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAppCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
