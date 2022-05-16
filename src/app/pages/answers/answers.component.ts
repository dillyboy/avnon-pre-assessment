import { Component, OnDestroy } from '@angular/core';
import { AnswersService } from "../../answers.service";
import QuestionTypeInterface from "../../interfaces/question-type";

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.scss']
})
export class AnswersComponent implements OnDestroy {

  answersObservable: any = null;
  questions: QuestionTypeInterface[] = [];

  constructor(private answersService: AnswersService) {
    this.answersObservable = answersService.answersObservable.subscribe(data => {
      this.questions = data;
    });
  }

  ngOnDestroy() {
    this.answersObservable.unsubscribe();
  }

}
