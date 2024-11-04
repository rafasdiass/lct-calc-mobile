import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-graph-display',
  templateUrl: './graph-display.page.html',
  styleUrls: ['./graph-display.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class GraphDisplayPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
