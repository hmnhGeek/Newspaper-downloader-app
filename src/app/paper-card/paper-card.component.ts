import { Component, Input, OnInit } from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-paper-card',
  templateUrl: './paper-card.component.html',
  styleUrls: ['./paper-card.component.css']
})
export class PaperCardComponent implements OnInit {

  @Input() paperName!: string;
  showSpinner: boolean = false;
  constructor(private apiService: AppService) { }

  ngOnInit(): void {
  }

  openNewspaper(newspaper: string) {
    this.showSpinner = true;
    this.apiService.newsPaperPdfGetApi(newspaper).subscribe(data => {
      window.open(<string> data, "_blank")?.focus();
      this.showSpinner = false;
    })
  }

  downloadNewspaper(newspaper: string) {
    this.apiService.newsPaperPdfGetApi(newspaper).subscribe(data => {
      var link = document.createElement('a');
      link.href = <string>data;
      link.download = newspaper+'.pdf';
      link.dispatchEvent(new MouseEvent('click'));
    })
  }

}
