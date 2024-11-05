import { addIcons } from 'ionicons';
import {
  homeOutline,
  calculatorOutline,
  timeOutline,
  informationCircleOutline,
  settingsOutline,
  personCircleOutline,
  cloudDownloadOutline,
  printOutline, // Importa o ícone de impressão
} from 'ionicons/icons';

export const registerIcons = () => {
  addIcons({
    'home-outline': homeOutline,
    'calculator-outline': calculatorOutline,
    'time-outline': timeOutline,
    'information-circle-outline': informationCircleOutline,
    'settings-outline': settingsOutline,
    'person-circle-outline': personCircleOutline,
    'cloud-download-outline': cloudDownloadOutline,
    'print-outline': printOutline, // Adiciona o ícone de impressão
  });
};
