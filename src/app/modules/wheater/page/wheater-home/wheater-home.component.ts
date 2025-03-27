import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { WheaterService } from '../../services/wheater.service';
import { WeatherDatas } from '../../../../models/interfaces/weather-datas.interface';

@Component({
  selector: 'app-wheater-home',
  imports: [
    FormsModule, 
    FontAwesomeModule,
  ],
  templateUrl: './wheater-home.component.html',
})
export class WheaterHomeComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<void> = new Subject();
  initialCityName = 'São Paulo';
  weatherDatas! :WeatherDatas;
  searchIcon = faMagnifyingGlass;

  constructor(private weatherService: WheaterService) {}

  ngOnInit(): void {
    this.getWeatherDatas(this.initialCityName);
  }

  getWeatherDatas(cityName: string): void {
    this.weatherService.getWeatherDatas(cityName)
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: (response) => {
          response && (this.weatherDatas = response);
        },
        error: (error) => console.log(error),
      });
  }

  OnSubmit(): void {
    this.getWeatherDatas(this.initialCityName);
    this.initialCityName = '';
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
