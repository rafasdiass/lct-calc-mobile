import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonRouterOutlet, IonFooter } from '@ionic/angular/standalone';
import { FooterPage } from "../content/footer/footer.page";
import { HeaderPage } from "../content/header/header.page";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonFooter,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonRouterOutlet,
    FooterPage,
    HeaderPage
],
})
export class HomePage {
  selectedTab: string = 'home'; // Define o valor padrão para a tab inicial

}
