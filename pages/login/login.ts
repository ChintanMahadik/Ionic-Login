import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LogoutPage} from "../logout/logout"
import { User } from '../../models/user';
import {AngularFireAuth} from 'angularfire2/auth';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user ={} as User;
  constructor( private afauth:AngularFireAuth,  private alertCntrl:AlertController, public navCtrl: NavController, public navParams: NavParams) {
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async loginUser(user : User){
  try{
   const result= await  this.afauth.auth.signInWithEmailAndPassword(user.email,user.password);
   console.log(result);
   this.navCtrl.push(LogoutPage,{param1:user.email});
    let alert = this.alertCntrl.create({
      title:'Welcome to Main Page',
      subTitle:'login successful',
      buttons:['OK']
    });
    alert.present();

    }
    catch(e){
      console.error(e);
      let alert = this.alertCntrl.create({
        title:'Sorry',
        subTitle:'Invalid Credentials, try again',
        buttons:['OK']
      });
      alert.present();
    }

  }

}
