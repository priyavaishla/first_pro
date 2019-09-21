import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContentServiceComponent } from './content-service/content-service.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ClientsComponent } from './clients/clients.component';
import { PricingComponent } from './pricing/pricing.component';
import { BannerComponent } from './banner/banner.component';
import { NavheaderComponent } from './navheader/navheader.component';
import { IntroBlockComponent } from './intro-block/intro-block.component';
import { UserTestimonialComponent } from './user-testimonial/user-testimonial.component';
import { PricingBlockComponent } from './pricing-block/pricing-block.component';
import { BlogComponent } from './blog/blog.component';
import { BlogsectionComponent } from './blogsection/blogsection.component';
import { DetailedblogComponent } from './detailedblog/detailedblog.component';
import { TestComponent } from './test/test.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ContactusComponent } from './contactus/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IntroductionComponent,
    GalleryComponent,
    ContentServiceComponent,
    TestimonialComponent,
    ClientsComponent,
    PricingComponent,
    BannerComponent,
    NavheaderComponent,
    IntroBlockComponent,
    UserTestimonialComponent,
    PricingBlockComponent,
    BlogComponent,
    BlogsectionComponent,
    DetailedblogComponent,
    TestComponent,
    ErrorComponent,
    LoginComponent,
    SignupComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
