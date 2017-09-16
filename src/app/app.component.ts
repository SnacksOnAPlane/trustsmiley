import { Component } from '@angular/core';
import { SheetDataService } from './sheet-data.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
	templateUrl: './app.component.html',
	providers: [SheetDataService]
})
export class AppComponent implements OnInit {
  constructor(private sheetDataService: SheetDataService) {}

  getRecs(): void {
    this.sheetDataService.getRecs().then(recs => console.log(recs));
  }

  ngOnInit(): void {
    this.getRecs();
  }
}
