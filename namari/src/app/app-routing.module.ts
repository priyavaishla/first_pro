import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContentServiceComponent } from './content-service/content-service.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ClientsComponent } from './clients/clients.component';
import { PricingComponent } from './pricing/pricing.component';
import { BlogComponent } from './blog/blog.component';
import { DetailedblogComponent } from './detailedblog/detailedblog.component';
import { TestComponent } from './test/test.component';
import { ErrorComponent } from './error/error.component';
import { AuthenticateService } from './authenticate.service';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HeaderComponent},
  {path:'about',component:IntroductionComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'services',component:ContentServiceComponent},
  {path:'testimonials',component:TestimonialComponent},
  {path:'clients',component:ClientsComponent},
  {path:'pricing',component:PricingComponent},
  {path:'blog',component:BlogComponent},
  {path:'detailedblog/:id',component:DetailedblogComponent},
  {path:'test',component:TestComponent,canActivate:[AuthenticateService]},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'404',component:ErrorComponent},
  {path:'**',redirectTo:'404'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
