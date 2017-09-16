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
var AppComponent = (function () {
    function AppComponent(sheetDataService) {
        this.sheetDataService = sheetDataService;
    }
    AppComponent.prototype.getRecs = function () {
        this.sheetDataService.getRecs().then(function (recs) { return console.log(recs); });
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