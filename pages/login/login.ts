import { Component, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TemperatureService } from '../services/temperature.service';
import { Verification } from '../models/verification';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
 
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
 
  animations: [
 
    //Logo
    trigger('flyInBottomSlow', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('void => *', [
        style({transform: 'translate3d(0,2000px,0'}),
        animate('2000ms ease-in-out')
      ])
    ]),
 
    //Back detail
    trigger('flyInBottomFast', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('void => *', [
        style({transform: 'translate3d(0,2000px,0)'}),
        animate('1000ms ease-in-out')
      ])
    ]),
 
    //log from
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
 
    //log
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
export class LoginPage {
 
  logoState: any = "in";
  cloudState: any = "in";
  loginState: any = "in";
  formState: any = "in";
  nom : string;
  password : string;
  bool : Verification;
 
  constructor(public navCtrl: NavController , private storage: Storage, private log_serv : TemperatureService,public alerCtrl: AlertController) {
 
  }

  log(){
    this.navCtrl.push(HomePage);
  }
  
  private doAlert(titre:string, message:string){
    let alert = this.alerCtrl.create({
        title: titre,
        message: message,
        buttons: ['Ok']
    });
    alert.present()
}

  checkLogin(){
    
    this.log_serv.login(this.nom, this.password)
    .then(boolFetched => { 
     this.bool = boolFetched
     console.log(this.bool);

     if(this.bool.statut==1){
        this.navCtrl.setRoot(HomePage);
        this.storage.set('nom',this.bool)
     }
     else{
        this.doAlert("Error",this.bool.message);

     }
    });

    
 }


  
 
}