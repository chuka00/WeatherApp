import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(location: string, units: string){
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q='+ location +'&appid=612ec9805c4c1a7f0ed679255f4a0915&units='+ units );
  }
}
