import { Component, Pipe, PipeTransform } from '@angular/core';
import { SheetDataService } from './sheet-data.service';
import { OnInit } from '@angular/core';

@Pipe({
  name: 'mapToIterable'
})
export class MapToIterable implements PipeTransform {
  transform(dict: Object): Array<any> {
    var a = [];
    for (var key in dict) {
      if (dict.hasOwnProperty(key)) {
        a.push({key: key, val: dict[key]});
      }
    }
    return a;
  }
}

@Component({
  selector: 'my-app',
	templateUrl: './app.component.html',
  providers: [SheetDataService]
})
export class AppComponent implements OnInit {
  recs: Array<any> = [];
  categories: Map<string, Array<any>>

  constructor(private sheetDataService: SheetDataService) {}

  getRecs(): void {
    this.sheetDataService.getRecs().then((recs: Array<any>) => this.parseRecs(recs));
  }

  parseRecs(recs: Array<any>): void {
    this.categories = this.parseCategories(recs);
  }

  parseCategories(recs: Array<any>): Map<string, Array<any>> {
    let retme = new Map<string, Array<any>>();
    for (let rec of recs) {
      if (!retme[rec.category]) {
        retme[rec.category] = new Array<any>();
      }
      retme[rec.category].push(rec);
    }
    return retme;
  }

  ngOnInit(): void {
    this.getRecs();
  }
}
