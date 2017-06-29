import { Injectable } from '@angular/core';

@Injectable()
export class QuestionService {
	subq : boolean;
	isButtonDisabled : boolean;
	constructor() { }

	getIsSubQuestionVal(): boolean {
		return	this.subq;	
	}

	setIsSubQuestionVal(val: boolean): void {
		this.subq = val;
	}

	getDisableSubQuestionButton(): boolean {
		return this.isButtonDisabled;
	}

	setDisableSubQuestionButton(val: boolean): void {
		this.isButtonDisabled = val;
	}
}
