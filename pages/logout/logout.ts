import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../home/home";

/**
 * Generated class for the LogoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html',
})
export class LogoutPage {
  emailid:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.emailid=navParams.get('param1');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogoutPage');
  }

logout(){
	this.navCtrl.setRoot(HomePage);
}
}
