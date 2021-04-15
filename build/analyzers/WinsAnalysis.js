"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchResult_1 = require("../MatchResult");
var WinsAnalysis = /** @class */ (function () {
    function WinsAnalysis(team) {
        this.team = team;
    }
    WinsAnalysis.prototype.run = function (matches) {
        var _this = this;
        var wins = matches.reduce(function (acc, itemRow) {
            return (itemRow[1] === _this.team && itemRow[5] === MatchResult_1.MatchResult.HomeWin) ||
                (itemRow[2] === _this.team && itemRow[5] === MatchResult_1.MatchResult.AwayWin)
                ? acc + 1
                : acc;
        }, 0);
        return this.team + " won " + wins + " games";
    };
    return WinsAnalysis;
}());
exports.WinsAnalysis = WinsAnalysis;
