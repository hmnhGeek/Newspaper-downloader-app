import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  allNewspapersGetApi() {
    return this.http.get("https://patrikawalaapis.herokuapp.com/available_newspapers");
  }

  newsPaperPdfGetApi(newspaper: string) {
    return this.http.get("https://patrikawalaapis.herokuapp.com/get_newspaper?newspaper_name="+newspaper);
  }
}
