import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.scss']
})
export class CreateModalComponent {

  formGroup: FormGroup;
  questionTypes = [
    {value: 'checkbox', display: 'Checkbox' },
    {value: 'textarea', display: 'Textarea (Paragraph)' }
  ];

  constructor(
    public dialogRef: MatDialogRef<CreateModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar
  ) {
    this.formGroup = this.fb.group({
      questionType: ['', [Validators.required]],
      question: ['', [Validators.required]],
      options: this.fb.array([]),
    });
  }

  addOptionName() {
    this.optionsForms.push(
      this.fb.group({
        optionName: ['', [Validators.required]],
        checked: [false],
      })
    );
  }

  removeOptionName(index: number) {
    this.optionsForms.removeAt(index)
  }

  get optionsForms() {
    return this.formGroup.get('options') as FormArray;
  }

  questionTypeChanged() {
    const questionType = this.formGroup.get('questionType')?.value;

    switch (questionType) {
      case 'checkbox':
        this.addOptionName(); // default option field
        break;
      case 'textarea':
        this.optionsForms.clear();
        break;
    }
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      this.dialogRef.close(form.value);
    } else {
      this._snackBar.open('Please fill all the required fields', 'Ok', {
        duration: 3000
      });
    }
  }

  close(): void {
    this.dialogRef.close();
  }

}
