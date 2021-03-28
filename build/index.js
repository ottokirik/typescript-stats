"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var reader = new CsvFileReader_1.CsvFileReader('football.csv');
reader.read();
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
var manUnitedWins = reader.data.reduce(function (acc, itemRow) {
    return (itemRow[1] === 'Man United' && itemRow[5] === MatchResult.HomeWin) ||
        (itemRow[2] === 'Man United' && itemRow[5] === MatchResult.AwayWin)
        ? acc + 1
        : acc;
}, 0);
console.log("Man United won " + manUnitedWins + " games");
