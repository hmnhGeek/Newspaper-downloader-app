import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'patrika-wala-app';
  newspapers: any = [];

  constructor(private apiService: AppService) {}

  ngOnInit() {
    this.apiService.allNewspapersGetApi().subscribe(data => {
      this.newspapers = data;
    });
  }
}
