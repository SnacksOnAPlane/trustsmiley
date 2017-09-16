"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var SheetDataService = (function () {
    function SheetDataService(http, _jsonp) {
        this.http = http;
        this._jsonp = _jsonp;
        this.url = 'https://spreadsheets.google.com/feeds/list/1AuxOvoQMsu-IqsmDFjZvw4vgCX323YoPPx3z8N2sBeE/od6/public/values?alt=json-in-script&callback=JSONP_CALLBACK';
    }
    SheetDataService.prototype.getRecs = function () {
        var _this = this;
        return this._jsonp.get(this.url)
            .toPromise()
            .then(function (response) { return response.json().feed.entry.map(function (item) { return _this.sanitizeEntry(item); }); })
            .catch(this.handleError);
    };
    SheetDataService.prototype.sanitizeEntry = function (entry) {
        // basically we just want the fields that start with gsx$, and only their $t vals
        var retme = {};
        for (var k in entry) {
            var v = entry[k];
            if (k.startsWith("gsx$")) {
                retme[k.substring(4)] = v['$t'];
            }
        }
        return retme;
    };
    SheetDataService.prototype.handleError = function () {
        debugger;
    };
    return SheetDataService;
}());
SheetDataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, http_1.Jsonp])
], SheetDataService);
exports.SheetDataService = SheetDataService;
//# sourceMappingURL=sheet-data.service.js.map