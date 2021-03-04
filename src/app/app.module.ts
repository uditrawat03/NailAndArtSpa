import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.componet';
import { HeaderComponent } from './layouts/header/header.component';
import { MobileHeaderComponent } from './layouts/header/mobile-header/mobile-header.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { AboutUsComponent } from './sections/aboutus/about-us.component';
import { AppointmentComponent } from './sections/appointment/appointment.component';
import { ContactusComponent } from './sections/contactus/contact-us.component';
import { PortfolioComponent } from './sections/portfolio/portfolio.component';
import { PromotionsComponent } from './sections/promotions/promotions.component';
import { ServicesComponent } from './sections/services/services.component';
import { SliderComponent } from './sections/slider/slider.component';
import { TeamsComponent } from './sections/teams/teams.component';
import { TestimonialsComponent } from './sections/testmonials/testimonials.component';
import { VideoComponent } from './sections/video/video.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MobileHeaderComponent,
    LayoutsComponent,
    AboutUsComponent,
    AppointmentComponent,
    ContactusComponent,
    PortfolioComponent,
    PromotionsComponent,
    ServicesComponent,
    SliderComponent,
    TeamsComponent,
    TestimonialsComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
