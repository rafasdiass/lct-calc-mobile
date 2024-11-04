import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-submit-button',
  templateUrl: './submit-button.page.html',
  styleUrls: ['./submit-button.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SubmitButtonPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
