import { Component } from '@angular/core';
import { ModalController ,IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from '@angular/common/http'


@IonicPage()
@Component({
  selector: 'page-lo-mas-visto',
  templateUrl: 'lo-mas-visto.html',
})
export class LoMasVistoPage {

  mydata : any;
  data : any[]=[];


  constructor(
      private http : HttpClient, 
      public navCtrl: NavController, 
      public navParams: NavParams
    ) {
  }

  ionViewCanEnter() {
    this.mydata = this.http.get('http://api.invent.mx/v1/rsvp/nodes.json/c91bd113d18c9d240dfbdb30ad7b4df2?limit=9');
    this.mydata.subscribe( data => {
      this.data = data.data;
    })

    console.log(this.navCtrl)
  }

  goTo(data){
    this.navCtrl.push('PostPage', {data : data});
  }

}
