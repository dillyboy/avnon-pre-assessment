import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuilderComponent } from "./pages/builder/builder.component";
import { ContainerComponent } from "./components/container/container.component";
import { AnswersComponent } from "./pages/answers/answers.component";

const routes: Routes = [
   { path: '' , redirectTo: 'form', pathMatch: 'full' },
  {
    path: 'form',
    component: ContainerComponent,
    children: [
      {path: '', redirectTo: 'builder', pathMatch: 'full' },
      {path: 'builder', component: BuilderComponent},
      {path: 'answers', component: AnswersComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
