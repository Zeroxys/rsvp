import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()

@Component({
  templateUrl: 'home.html',
  entryComponents : [
  ]
})

export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}
}
