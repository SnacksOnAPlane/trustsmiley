import { Component } from '@angular/core';
import { SheetDataService } from './sheet-data.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
	templateUrl: './app.component.html',
	providers: [SheetDataService]
})
export class AppComponent implements OnInit {
  recs = [];

  constructor(private sheetDataService: SheetDataService) {}

  getRecs(): void {
    this.sheetDataService.getRecs().then(recs => this.parseRecs(recs));
  }

  parseRecs(recs: Array<Object>): void {
    this.recs = recs;
  }

  ngOnInit(): void {
    this.getRecs();
  }
}
