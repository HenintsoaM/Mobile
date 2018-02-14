import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicStorageModule } from '@ionic/storage';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LoginPage} from '../pages/login/login';
import {WelcomePage} from '../pages/welcome/welcome';
import {SignupPage} from '../pages/signup/signup';


import {TemperatureService} from '../pages/services/temperature.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    WelcomePage,
    SignupPage
  ],
  imports: [
    BrowserModule,HttpModule,BrowserAnimationsModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    WelcomePage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TemperatureService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
