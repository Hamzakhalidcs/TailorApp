import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController, MenuController,
LoadingController,PopoverController } from '@ionic/angular';
import { analytics } from 'firebase';
import { PopoverComponent } from 'src/app/popover/popover.component';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


// import { SkfabPage } from '../skfab/skfab.page';
@Component({
  selector: 'app-skameez',
  templateUrl: './skameez.page.html',
  styleUrls: ['./skameez.page.scss'],
})
export class SKameezPage implements OnInit {

  constructor( private menu: MenuController,
    private popoverCtrl: PopoverController,public router: Router,private http: HttpClient) 
    { 
    // this.menu.enable(false, 'first');
  }
 

  ngOnInit() {
    
  }
  async optionsPopover(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: PopoverComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  form ={}
  Measurment(){
    console.log(this.form);
    
    // Add headers
    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST,GET,OPTION,PUT');
    headers.append('Accept', 'application/json');
    headers.append('content-type', 'application/json');

    // Now post this data to API
    this.http.post('http://0.0.0.0:8080/measure-data',{
      content:this.form,
    }).subscribe((response) =>{
        console.log(response)
    });

}
}
