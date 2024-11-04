import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-error-notification',
  templateUrl: './error-notification.page.html',
  styleUrls: ['./error-notification.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ErrorNotificationPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
