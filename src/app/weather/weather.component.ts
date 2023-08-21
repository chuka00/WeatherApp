import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  myWeather: any;
  weather: string = '';
  temperature: number = 0;
  feelsLike: number = 0;
  pressure: number = 0;
  humidity: number = 0;
  summary: string = '';
  iconUrl: string = '';
  location: string = '';
  units: string = 'metric';
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeather();
  }

  private getWeather(): void{
    this.weatherService.getWeather(this.location, this.units).subscribe({
      next: (data) => {
        console.log(data);
        this.myWeather = data;
        this.weather = this.myWeather.weather[0].main;
        console.log(this.weather);
        this.summary = this.myWeather.weather[0].description;
        this.temperature = this.myWeather.main.temp;
        this.feelsLike = this.myWeather.main.feels_like;
        this.pressure = this.myWeather.main.pressure;
        this.humidity = this.myWeather.main.humidity;
        this.iconUrl = 'https://openweathermap.org/img/wn/' + this.myWeather.weather[0].icon + '.png';
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('Api call completed');
      }
    })
  };

  onSubmit(){
    this.getWeather();
    this.location='';
  }

  // ngOnInit(): void {
  //   this.weatherService.getWeather(this.location, this.units).subscribe({
  //     next: (data) => {
  //       console.log(data);
  //       this.myWeather = data;
  //       this.weather = this.myWeather.weather[0].main;
  //       console.log(this.weather);
  //       this.summary = this.myWeather.weather[0].description;
  //       this.temperature = this.myWeather.main.temp;
  //       this.feelsLike = this.myWeather.main.feels_like;
  //       this.pressure = this.myWeather.main.pressure;
  //       this.humidity = this.myWeather.main.humidity;
  //       this.iconUrl = 'https://openweathermap.org/img/wn/' + this.myWeather.weather[0].icon + '@2x.png';
  //     },
  //     error: (error) => {
  //       console.log(error);
  //     },
  //     complete: () => {
  //       console.log('Api call completed');
  //     }
  //   })
  // }
}
