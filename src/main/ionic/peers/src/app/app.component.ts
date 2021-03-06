import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { RegisterPage } from "../pages/register/register";
import { LoginPage } from '../pages/login/login';
import { MyProfile } from "../pages/my-profile/my-profile";

import { AuthService } from "../services/auth/auth-service";
import 'rxjs/add/operator/filter'; // imported for tag-input to work
import 'rxjs/add/operator/debounceTime'; // imported for tag-input to work

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = null;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              private auth: AuthService) {
    auth.checkCurrentUser().subscribe(isValid => {
      if (isValid) {
        this.rootPage = HomePage;
      } else {
        this.rootPage = LoginPage;
      }
    });

    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      {title: 'Home', component: HomePage},
      {title: 'My Profile', component: MyProfile},
      {title: 'Login', component: LoginPage},
      {title: 'Register', component: RegisterPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  signOut() {
    this.auth.signOut().subscribe(res => {
      if (!res) {
        this.openPage(this.pages[2]);
      }
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}
