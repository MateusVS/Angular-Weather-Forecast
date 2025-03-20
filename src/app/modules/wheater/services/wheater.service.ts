import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WheaterService {
  private apiKey = 'c05b1ed7e528f107d7a7f26542535928';

  constructor(private http: HttpClient) { }

  getWeatherDate(cityName: string): Observable<any> {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${this.apiKey}`, 
      {},
    );
  }
}
