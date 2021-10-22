import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { TokenInterceptorService } from './services/token/token-interceptor.service';

/* External Modules */
import { CKEditorModule } from 'ckeditor4-angular';
import { JoditAngularModule } from 'jodit-angular';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';
import { NewSettingsComponent } from './components/new-settings/new-settings.component';
import { GallerySettingsComponent } from './components/gallery-settings/gallery-settings.component';
import { ApprovedSettingsComponent } from './components/approved-settings/approved-settings.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { TestComponent } from './components/testing/test/test.component';
import { AuthGuard } from './guards/auth.guard';
import { AddReleaseComponent } from './components/new-settings/add-release/add-release.component';
import { EditReleaseComponent } from './components/new-settings/edit-release/edit-release.component';
import { DownReleaseComponent } from './components/new-settings/down-release/down-release.component';
import { OutstandingComponent } from './components/outstand-settings/outstanding/outstanding.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    NewSettingsComponent,
    GallerySettingsComponent,
    ApprovedSettingsComponent,
    LoginComponent,
    RegisterComponent,
    TestComponent,
    AddReleaseComponent,
    EditReleaseComponent,
    DownReleaseComponent,
    OutstandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    CKEditorModule,
    JoditAngularModule,
    NgxPaginationModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
