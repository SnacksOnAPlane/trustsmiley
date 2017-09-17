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
var sheet_data_service_1 = require("./sheet-data.service");
var MapToIterable = (function () {
    function MapToIterable() {
    }
    MapToIterable.prototype.transform = function (dict) {
        var a = [];
        for (var key in dict) {
            if (dict.hasOwnProperty(key)) {
                a.push({ key: key, val: dict[key] });
            }
        }
        return a;
    };
    return MapToIterable;
}());
MapToIterable = __decorate([
    core_1.Pipe({
        name: 'mapToIterable'
    })
], MapToIterable);
exports.MapToIterable = MapToIterable;
var AppComponent = (function () {
    function AppComponent(sheetDataService) {
        this.sheetDataService = sheetDataService;
        this.recs = [];
    }
    AppComponent.prototype.getRecs = function () {
        var _this = this;
        this.sheetDataService.getRecs().then(function (recs) { return _this.parseRecs(recs); });
    };
    AppComponent.prototype.parseRecs = function (recs) {
        this.categories = this.parseCategories(recs);
    };
    AppComponent.prototype.parseCategories = function (recs) {
        var retme = new Map();
        for (var _i = 0, recs_1 = recs; _i < recs_1.length; _i++) {
            var rec = recs_1[_i];
            if (!retme[rec.category]) {
                retme[rec.category] = new Array();
            }
            retme[rec.category].push(rec);
        }
        return retme;
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getRecs();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app.component.html',
        providers: [sheet_data_service_1.SheetDataService]
    }),
    __metadata("design:paramtypes", [sheet_data_service_1.SheetDataService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map