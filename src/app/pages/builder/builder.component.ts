import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { CreateModalComponent } from "./create-modal/create-modal.component";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AnswersService } from "../../answers.service";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import QuestionTypeInterface from "../../interfaces/question-type";

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent implements OnInit, OnDestroy {

  formGroup: FormGroup;
  answersObservable: any = null;

  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
    private answersService: AnswersService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.formGroup = this.fb.group({
      questions: this.fb.array([]),
    });

    this.answersObservable = answersService.answersObservable.subscribe(questions => {
      questions.forEach((question: QuestionTypeInterface) => {
        this.addQuestionFormGroup(question);
      })
    });

  }

  ngOnInit(): void {
  }

  addNewQuestion() {
    const dialogRef = this.dialog.open(CreateModalComponent, {
      width: '500px',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addQuestionFormGroup(result);
      }
    });
  }

  addQuestionFormGroup(result: QuestionTypeInterface) {
    const {options, question, questionType, answer} = result;

    let answerValidators: any[] = [];
    if (questionType === 'textarea') {
      answerValidators = [Validators.required];
    }

    this.questionForms.push(
      this.fb.group({
        questionType: [questionType, [Validators.required]],
        question: [question, [Validators.required]],
        options: [options],
        answer: [answer, answerValidators],
      })
    );
  }

  get questionForms() {
    return this.formGroup.get('questions') as FormArray;
  }

  checkboxChanged(checked: boolean, questionsIndex: number, optionsIndex: number) {
    let optionsValue = JSON.parse(JSON.stringify(this.questionForms.controls[questionsIndex].get('options')?.value));
    optionsValue[optionsIndex].checked = !checked;
    this.questionForms.controls[questionsIndex].get('options')?.setValue(optionsValue);
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      this.answersService.updateAnswers(form.value.questions);
      this.router.navigate(['/form/answers'])
    } else {
      console.log(form);
      this._snackBar.open('Please fill all the required fields', 'Ok', {
        duration: 3000
      });
    }
  }

  ngOnDestroy() {
    this.answersObservable.unsubscribe();
  }

}
