import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import QuestionTypeInterface from "./interfaces/question-type";

@Injectable({
  providedIn: 'root'
})
export class AnswersService {

  private questions = new BehaviorSubject<QuestionTypeInterface[]>([]);
  answersObservable = this.questions.asObservable();

  constructor() { }

  updateAnswers(answers: any) {
    this.questions.next(answers);
  }
}
