import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonFooter,
  IonTabBar,
  IonLabel,
  IonIcon,
  IonTabButton,
} from '@ionic/angular/standalone';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.page.html',
  styleUrls: ['./footer.page.scss'],
  standalone: true,
  imports: [
    IonTabButton,
    IonLabel,
    IonTabBar,
    IonFooter,
    IonIcon,
    IonContent,
    CommonModule,
    FormsModule,
    RouterModule,
  ],
})
export class FooterPage implements OnInit {
  selectedTab: string = 'home';

  constructor(private router: Router) {}

  ngOnInit() {}

  navigateTo(route: string) {
    this.selectedTab = route.replace('/', '');
    this.router.navigate([route]);
  }
}
