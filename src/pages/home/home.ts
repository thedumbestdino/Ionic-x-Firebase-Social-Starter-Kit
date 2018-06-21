import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login';

import { AngularFireAuth } from 'angularfire2/auth';
import { LoadingProvider } from '../../providers/loading/loading';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	userData:any;

  constructor(public afAuth: AngularFireAuth, public navCtrl: NavController, public navParam: NavParams,public loadingProvider : LoadingProvider) {

  		this.userData = this.navParam.get('res');
  		console.log('userData',this.userData);

  }

  logout(){
    this.loadingProvider.startLoading();
  	this.afAuth.auth.signOut();
  	this.navCtrl.setRoot(LoginPage);
    this.loadingProvider.stopLoading();

  }

}
