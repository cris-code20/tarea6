import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage implements OnInit {

  weatherData: any;
  apiKey: string = '4ca801d2c7c5cfea23a81f5dbbb4410b';
  ciudad: string = 'Santo Domingo';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getWeatherData();
  }

  getWeatherData() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.ciudad}&units=metric&appid=${this.apiKey}`;
    this.http.get(url).subscribe(
      (data) => {
        this.weatherData = data;
        console.log(this.weatherData);
      },
      (error) => {
        console.error('Error obteniendo el clima', error);
      }
    );
  }
}
