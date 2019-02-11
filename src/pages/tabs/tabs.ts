import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  public textColor:any;

  loMasVistoRoot = 'LoMasVistoPage'
  loUltimoRoot = 'LoUltimoPage'


  constructor(public navCtrl: NavController) {}

  testing(){
    console.log('---> entro');
  }

}
