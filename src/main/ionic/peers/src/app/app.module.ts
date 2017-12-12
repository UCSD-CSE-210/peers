import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MyProfile } from "../pages/my-profile/my-profile";
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { UserService } from "../services/user-service";
import { CardsService } from "../services/cards-service";
import { CardsState } from "../states/cards-state";

import { ComponentsModule } from "../components/components.module";
import { AppState } from "../states/app-state";

import { SwingModule } from 'angular2-swing';
import { IonicImageViewerModule } from 'ionic-img-viewer';

import { AuthService } from '../services/auth/auth-service';

import { HttpClientModule } from "@angular/common/http";
import { ENV } from "@app/env";
import {UserState} from "../states/user-state";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MyProfile,
    LoginPage,
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp),
    SwingModule,
    IonicImageViewerModule,
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MyProfile,
    LoginPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserService,
    AppState,
    CardsState,
    CardsService,
    UserState,
    {provide: AuthService, useClass: ENV.auth},
    //AuthService
  ]
})
export class AppModule {
}
