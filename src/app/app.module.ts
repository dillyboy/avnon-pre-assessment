import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./modules/material.module";
import { ReactiveFormsModule } from "@angular/forms";
import { BuilderComponent } from './pages/builder/builder.component';
import { AnswersComponent } from './pages/answers/answers.component';
import { ContainerComponent } from './components/container/container.component';
import { CreateModalComponent } from './pages/builder/create-modal/create-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    BuilderComponent,
    AnswersComponent,
    ContainerComponent,
    CreateModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
