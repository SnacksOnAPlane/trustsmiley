import { Injectable } from '@angular/core';
import { Headers, Http, Jsonp } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class SheetDataService {
  private url = 'https://spreadsheets.google.com/feeds/list/1AuxOvoQMsu-IqsmDFjZvw4vgCX323YoPPx3z8N2sBeE/od6/public/values?alt=json-in-script&callback=JSONP_CALLBACK';

  constructor(private http: Http, private _jsonp: Jsonp) {}

  getRecs(): Promise<Object> {
    return this._jsonp.get(this.url)
               .toPromise()
               .then(response => response.json().feed.entry.map((item: Object) => this.sanitizeEntry(item)))
               .catch(this.handleError);
  }

  sanitizeEntry(entry: Object): Object {
    // basically we just want the fields that start with gsx$, and only their $t vals
    var retme = {};
    for (var k in entry) {
      var v = entry[k];
      if (k.startsWith("gsx$")) {
        retme[k.substring(4)] = v['$t'];
      }
    }
    return retme;
  }

  handleError(): void {
    debugger;
  }
}
