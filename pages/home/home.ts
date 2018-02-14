import { Component } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import { Temperature} from '../models/temps';
import { TemperatureService} from '../services/temperature.service';
import { Main} from '../models/main';
import { Weather} from '../models/weather';
import { Haut} from '../models/haut';
import { Bas} from '../models/bas';
import {trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Label } from 'ionic-angular/components/label/label';
import { NgForOf } from '@angular/common/src/directives';
import { Storage } from '@ionic/storage';
import { Verification } from '../models/verification';
import { User } from '../models/user';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  temper : Temperature = new Temperature();
  haut : Haut[] = new Array();
  bas : Bas[] = new Array();
  weat : Weather = new Weather();
  mai : Main = new Main();
  city : string;
  tepera  : number;
  top = new Array();
  bottom = new Array();
  verif : Verification = new Verification();
  

  constructor(public navCtrl: NavController, public alerCtrl: AlertController,private storage: Storage, public navParams: NavParams, private temp : TemperatureService) {
    this.storage.get("nom").then((result)=>{
      
      this.verif =result;
      console.log("use"+this.verif.user.sexe);
    })
  }

  private getTemperature(){
    this.temp.getTemperature(this.city).then(reponse =>{
      console.log(reponse.weather)
      this.temper.name = reponse.name
      this.mai = reponse.main as Main
      this.weat = reponse.weather[0] as Weather
      console.log("temp :"+this.mai.temp.toString())
      
  
  // console.log("temp1 :"+this.mai.temp.toString())
  // console.log("taille tab :"+Haut.length);
  // this.haut = []; 
  // console.log("taille tab ap:"+Haut.length);


      


 console.log("use2"+this.verif.user.sexe);
  this.temp.gethaut(this.mai.temp.toString(),this.mai.temp.toString(),this.verif.user.sexe).then(hautFetched => { 
    this.haut = new Array();
    this.haut = hautFetched as Haut[]
    let i = 0;
    this.top = new Array()
    while(i < this.haut.length){
      this.top.push({image: this.haut[i].image})
      i++;
    }
    //console.log("huhu "+this.haut[0].image);  
  })

  
  this.temp.getbas(this.mai.temp.toString(),this.mai.temp.toString(),"H").then(basFetched => { 
    
    this.bas = basFetched as Bas[]
    let i = 0;
    this.bottom = new Array()
    while(i < this.bas.length){
      this.bottom.push({image: this.bas[i].image})
      i++;
    }
   
    //console.log("huhu "+this.haut[0].image);  
  })

});
}
}

//this.tepera=  this.getTemperature().mai.temp;





/*bas = [
  {
    image:"../assets/imgs/bas1.jpg"
  },
  {
    image:"../assets/imgs/bas2.png"
  },
  {
    image:"../assets/imgs/bas3.jpg"
  },
];*/
  /*public getTemperature(){
    this.TemperatureService.getTemperature(this.city)
    .catch(data =>{
      this.temperature = JSON.parse(data._body);
//console.log("weatherA": "+this.temperature.weather[0].icon+".png")
     //console.log(this.date);

    })
  }*/

 // public getdate(){
  // Date = new Date();


