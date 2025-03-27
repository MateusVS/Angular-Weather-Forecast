import { Component, OnInit } from '@angular/core';
import { WheaterService } from '../../services/wheater.service';
import { WeatherDatas } from '../../../../models/interfaces/weather-datas.interface';

@Component({
  selector: 'app-wheater-home',
  imports: [],
  templateUrl: './wheater-home.component.html',
})
export class WheaterHomeComponent implements OnInit {
  initialCityName = 'São Paulo';
  weatherDatas! :WeatherDatas;

  constructor(private weatherService: WheaterService) {}

  ngOnInit(): void {
    this.getWeatherDatas(this.initialCityName);
  }

  getWeatherDatas(cityName: string): void {
    this.weatherService.getWeatherDatas(cityName)
      .subscribe({
        next: (response) => {
          response && (this.weatherDatas = response);
        },
        error: (error) => console.log(error),
      })
  }
}
