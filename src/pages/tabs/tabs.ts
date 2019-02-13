import { Component } from '@angular/core';
import { IonicPage, NavController, MenuController } from 'ionic-angular';

@IonicPage()

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  public textColor:any;

  loMasVistoRoot = 'LoMasVistoPage'
  loUltimoRoot = 'LoUltimoPage'


  constructor(public navCtrl: NavController, menu : MenuController) {
    menu.enable(true, 'menu')
  }

  testing(){
    console.log('--->asd')
  }

}
