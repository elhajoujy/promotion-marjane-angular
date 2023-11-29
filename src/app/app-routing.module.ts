import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromotionsComponent } from './features/promotions/promotions.component';

const routes: Routes = [
  { path:'/admin/dashboard', component : PromotionsComponent,},
  {path: '/responsable/dashboard', component : PromotionsComponent,}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),

    HttpClientModule
  ],
  providers: [
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
