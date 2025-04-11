import { RouterModule, Routes } from '@angular/router';
import { CardGridComponent } from './card-grid/card-grid.component';
import { CreditCardFormComponent } from './credit-card-form/credit-card-form.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', component: CardGridComponent },
    { path: 'new', component: CardGridComponent },
    { path: 'add-a-card', component: CreditCardFormComponent }
  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  
