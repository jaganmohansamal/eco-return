import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { SupportComponent } from './pages/support/support.component';
import { PageNotFoundComponent } from './shared-pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: "", redirectTo:'/home',pathMatch:'full'},
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "login", component: LoginComponent },
  { path: "payment", component: PaymentComponent },
  { path: "support", component: SupportComponent },
  { path: "**", component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
