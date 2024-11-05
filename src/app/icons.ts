// ioicons.ts
import { addIcons } from 'ionicons';
import {
  homeOutline,
  calculatorOutline,
  timeOutline,
  informationCircleOutline,
} from 'ionicons/icons';

export const registerIcons = () => {
  addIcons({
    'home-outline': homeOutline,
    'calculator-outline': calculatorOutline,
    'time-outline': timeOutline,
    'information-circle-outline': informationCircleOutline,
  });
};
