import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFooter, IonRouterOutlet, IonIcon, IonButton, IonButtons } from '@ionic/angular/standalone';
import { FooterPage } from "../footer/footer.page";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonButtons, IonButton, IonIcon, IonFooter, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, FooterPage, IonRouterOutlet]
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
