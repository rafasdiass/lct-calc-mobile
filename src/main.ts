// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { registerIcons } from './app/icons';

// Registrar ícones antes de iniciar o aplicativo
registerIcons();

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
