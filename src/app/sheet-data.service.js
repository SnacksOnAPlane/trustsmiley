"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var SheetDataService = (function () {
    function SheetDataService() {
    }
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
    SheetDataService.prototype.loadReviews = function (reviews) {
        for (var i in reviews.feed.entry) {
            var entry = sanitizeEntry(reviews.feed.entry[i]);
            var category = entry['category'];
            if (!$scope.categories[category]) {
                $scope.categories[category] = [entry];
            }
            else {
                $scope.categories[category].push(entry);
            }
        }
        console.log($scope.categories);
    };
    SheetDataService.prototype.loadFromServer = function () {
        var url = 'https://spreadsheets.google.com/feeds/list/1AuxOvoQMsu-IqsmDFjZvw4vgCX323YoPPx3z8N2sBeE/od6/public/values?alt=json-in-script';
        url = $sce.trustAsResourceUrl(url);
        $http.jsonp(url, { jsonpCallbackParam: 'callback' })
            .then(function (data) {
            loadReviews(data.data);
        });
    };
    return SheetDataService;
}());
SheetDataService = __decorate([
    core_1.Injectable()
], SheetDataService);
exports.SheetDataService = SheetDataService;
//# sourceMappingURL=sheet-data.service.js.map