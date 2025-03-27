import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  faDroplet, 
  faTemperatureHigh, 
  faTemperatureLow, 
  faWind,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WeatherDatas } from '../../../../models/interfaces/weather-datas.interface';

@Component({
  selector: 'app-weather-card',
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  templateUrl: './weather-card.component.html',
  styleUrls: [],
})
export class WeatherCardComponent {
  @Input() weatherDatasInput!: WeatherDatas;

  minTemperatureIcon = faTemperatureLow;
  maxTemperatureIcon = faTemperatureHigh;
  humidityIcon = faDroplet;
  windIcon = faWind;
}
