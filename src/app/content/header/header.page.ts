import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonButtons,
  IonIcon,
  IonLabel,
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { registerIcons } from '../../icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonButtons,
    IonButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonLabel,
  ],
})
export class HeaderPage implements OnInit {
  title: string = 'LCT - Calculator';

  constructor(private router: Router) {
     registerIcons(); 
  }

  ngOnInit() {}

  navigateTo(route: string): void {
    this.router.navigate([`/home/${route}`]); // Navega para a rota 'report'
  }
}
