import { Component, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AlertController } from 'ionic-angular';
import { TemperatureService } from '../services/temperature.service';
 
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
 
  animations: [
 
    //For the logo
    trigger('flyInBottomSlow', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('void => *', [
        style({transform: 'translate3d(0,2000px,0'}),
        animate('2000ms ease-in-out')
      ])
    ]),
 
    //For the background detail
    trigger('flyInBottomFast', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('void => *', [
        style({transform: 'translate3d(0,2000px,0)'}),
        animate('1000ms ease-in-out')
      ])
    ]),
 
    //For the login form
    trigger('bounceInBottom', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('void => *', [
        animate('2000ms 200ms ease-in', keyframes([
          style({transform: 'translate3d(0,2000px,0)', offset: 0}),
          style({transform: 'translate3d(0,-20px,0)', offset: 0.9}),
          style({transform: 'translate3d(0,0,0)', offset: 1})
        ]))
      ])
    ]),
 
    //For login button
    trigger('fadeIn', [
      state('in', style({
        opacity: 1
      })),
      transition('void => *', [
        style({opacity: 0}),
        animate('1000ms 2000ms ease-in')
      ])
    ])
  ]
})
export class SignupPage {
 
  logoState: any = "in";
  cloudState: any = "in";
  loginState: any = "in";
  formState: any = "in";

  nom : string;
  prenom : string ;
  pass : string ;
  sexe : string;
  date : string;
  ville : string;
 
  constructor(public navCtrl: NavController, public alerCtrl: AlertController, private insc_serv : TemperatureService) {
 
  }

  signin(){
   // this.navCtrl.push(HomePage);
  }

  
  private insertInscri(){

    this.insc_serv.saveUser(this.nom,this.prenom,this.pass,this.sexe,this.date,this.ville);
    this.navCtrl.push(LoginPage);
}

 
}