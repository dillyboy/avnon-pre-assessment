import { NgModule } from "@angular/core";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatCardModule } from "@angular/material/card";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSelectModule } from "@angular/material/select";
import { MatIconModule } from "@angular/material/icon";
import { MatCheckboxModule } from "@angular/material/checkbox";


@NgModule({
  imports: [
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSelectModule,
    MatIconModule,
    MatCheckboxModule],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSelectModule,
    MatIconModule,
    MatCheckboxModule]
})
export class MaterialModule { }
