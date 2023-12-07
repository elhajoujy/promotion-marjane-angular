import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromotionsComponent } from './features/promotions/promotions.component';
import { AdminDashboardComponent } from './features/dashboard-admin/admin-dashboard.component';
import { DashboardResponsableComponent } from './features/dashboard-responsable/dashboard-responsable.component';
import { AdminGeneralDashboardComponent } from './features/admin-general/admin-general-dashboard/admin-general-dashboard.component';

const routes: Routes = [
  { path:'admin/dashboard', component : AdminDashboardComponent,},
  {path: 'responsable/dashboard', component : DashboardResponsableComponent,},
  {path: "admin-general/dashboard", component: AdminGeneralDashboardComponent},
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
