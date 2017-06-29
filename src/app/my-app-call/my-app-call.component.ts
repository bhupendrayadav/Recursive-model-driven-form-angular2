import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { QuestionsFormArrayComponent } from './questions-form-array/questions-form-array.component';
import { QuestionService } from './question.service';

@Component({
  selector: 'my-call',
  templateUrl: './my-app-call.component.html',
  styleUrls: ['./my-app-call.component.css'],
  providers: [
    QuestionService
  ]
})

export class MyAppCallComponent implements OnInit {
  
  myForm: FormGroup;
  @ViewChild(QuestionsFormArrayComponent) questionArrComRef;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // build the form model
    this.myForm = this.fb.group({
      questions: QuestionsFormArrayComponent.buildQuestions()
    })
  }

  addNewQuestion() {
    this.questionArrComRef.addQuestion();
  }

  submit() {
    alert("Form submitted:- Our model is ready, we can call a REST api to save these or do whatever we want with that!");
    console.log("Reactive Form submitted: ", this.myForm);
  }
}
