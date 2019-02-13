import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ThrowStmt } from '@angular/compiler';

/**
 * Generated class for the PostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})

export class PostPage {
  
  data : any;
  title : any;
  body : any;
  cleanBody: any;
  stringifyData : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let parser = new DOMParser();

    this.data = this.navParams.get('data');
    this.body = parser.parseFromString(this.data.body, 'text/html');
    this.cleanBody = this.body.querySelector("body");
    
    this.stringifyData = String(this.cleanBody.outerHTML);

    console.log(String(this.cleanBody.outerHTML));

  }

  ionViewDidLoad() {
    console.log(this.cleanBody);
  }

}
