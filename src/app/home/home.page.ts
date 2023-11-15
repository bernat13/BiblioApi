import { Component } from '@angular/core';
import { SCatalogoService } from '../services/scatalogo.service';
import { ICatalogo } from '../Interfaces/icatalogo';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  lista!: ICatalogo[]
  constructor(private serv: SCatalogoService) {

  }
  ionViewWillEnter() {
    console.log("holaaaa");
    this.serv.getAll().subscribe(
      resp => {
        this.lista = resp;
      }
    );
  }

}
