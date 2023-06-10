import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
  getWeatherdata(cityName:string): Observable<WeatherData>
  {
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl,{
      headers:new HttpHeaders()
      .set(environment.XRapidAPIKeyHeaderName,environment.XRapidAPIHostHeaderValue)
      .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue),
      params:new HttpParams()
      .set('q',cityName)

    })
  }
}
export const environment={
  production:false,
  weatherApiBaseUrl: 'https://weatherapi-com.p.rapidapi.com/current.json',
  XRapidAPIHostHeaderName:'X-RapidAPI-Host',
  XRapidAPIHostHeaderValue:'weatherapi-com.p.rapidapi.com',
  XRapidAPIKeyHeaderName:'X-RapidAPI-Key',
  XRapidAPIKeyHeaderValue:'33a6faa34dmshe8bf934ff6a1492p1860ecjsnfdc7140e0064'
};
