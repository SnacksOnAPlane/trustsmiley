import { Component } from '@angular/core';
import { SheetDataService } from './sheet-data.service';

@Component({
  selector: 'my-app',
	templateUrl: './app.component.html',
	providers: [SheetDataService]
})
export class AppComponent {
	constructor(private sheetDataService: SheetDataService) {}
}
