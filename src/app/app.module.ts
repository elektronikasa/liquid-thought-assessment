import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Angular Essentials
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

// Common 
import { ButtonComponent } from './common/button/button.component';
import { FormInputComponent } from './common/form-input/form-input.component';

// Pages
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { MissingComponent } from './pages/missing/missing.component';
import { TestPageComponent } from './pages/test-page/test-page.component';
import { MainHeaderComponent } from './common/main-header/main-header.component';
import { FooterLandingComponent } from './common/footer-landing/footer-landing.component';

const appRoutes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'test',      component: TestPageComponent },
  { path: '**', component: MissingComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    FormInputComponent,
    LandingPageComponent,
    MissingComponent,
    TestPageComponent,
    MainHeaderComponent,
    FooterLandingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }