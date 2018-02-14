import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import { Temperature } from '../models/temps';
import { Verification} from '../models/verification'
import { Haut} from '../models/haut'
import { Bas} from '../models/bas'
import {Accessoire} from '../models/accessoire'

@Injectable()
export class TemperatureService{
    constructor(private http: Http) {

    }
        public getTemperature(ville): Promise<any> {
            const url = "http://api.openweathermap.org/data/2.5/weather?q="+ville+"&APPID=b821fc635dc63614be5fd56fa1cfe77a&units=metric";
        
            return this.http.get(url)
            .toPromise()
            .then(response => response.json())
            .catch(error => console.log('Une erreur est survenue ' + error))
            .then(
                    

            )
        }

        public login(nom,mdp): Promise<any> {
            const url = "https://infinite-woodland-93918.herokuapp.com/user/findUserC?name="+nom+"&pass="+mdp;
            console.log("url :"+url)
            return this.http.get(url).toPromise()
            .then(response => response.json() as Verification)
            .catch(error => console.log('Une erreur est survenue ' + error))
        
        }

        public saveUser(nom,prenom,pass,sexe,dtn,ville) : void {
            const url = "https://infinite-woodland-93918.herokuapp.com/user/saveUser?nom="+nom+"&prenom="+prenom+"&pass="+pass+"&sexe="+sexe+"&dtn="+dtn+"&ville="+ville;
            this.http.get(url).toPromise();
        }

        public gethaut(temp,temp2,sexe): Promise<any> {
            const url = "https://infinite-woodland-93918.herokuapp.com/haut/findHautC?temp="+temp+"&temp2="+temp2+"&sexe="+sexe;
            console.log("url haut:"+url)
            return this.http.get(url).toPromise()
            .then(response => response.json() as Haut)
            .catch(error => console.log('Une erreur est survenue ' + error))
           
        
        }

        public getbas(temp,temp2,sexe): Promise<any> {
            const url = "https://infinite-woodland-93918.herokuapp.com/bas/findBasC?temp="+temp+"&temp2="+temp2+"&sexe="+sexe;
            console.log("url bas:"+url)
            return this.http.get(url).toPromise()
            .then(response => response.json() as Bas)
            .catch(error => console.log('Une erreur est survenue ' + error))
        
        }

        public getaccess(sexe): Promise<any> {
            const url = "https://infinite-woodland-93918.herokuapp.com/haut/findHautC?description="+sexe;
            return this.http.get(url).toPromise()
            .then(response => response.json() as Accessoire)
            .catch(error => console.log('Une erreur est survenue ' + error))
        
        }
}
