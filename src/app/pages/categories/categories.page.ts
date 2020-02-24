import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import {ICategory} from '../../interfaces/ICategory';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  public categories: ICategory[];

  constructor(
      private api: ApiService,
      private alertController: AlertController
  ) { }

  ngOnInit() {

    this.api.getCategories()
    .subscribe(response => {
      if (response.success) {
        this.categories = response.categories;
      } else {
        this.presentAlert(response.message);
      }
    });

  }

  async presentAlert(message) {
    const alert = await this.alertController.create({
      header: 'message',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

}
