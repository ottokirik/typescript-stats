"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var MatchResult_1 = require("./MatchResult");
var reader = new MatchReader_1.MatchReader('football.csv');
reader.read();
var manUnitedWins = reader.data.reduce(function (acc, itemRow) {
    return (itemRow[1] === 'Man United' && itemRow[5] === MatchResult_1.MatchResult.HomeWin) ||
        (itemRow[2] === 'Man United' && itemRow[5] === MatchResult_1.MatchResult.AwayWin)
        ? acc + 1
        : acc;
}, 0);
console.log("Man United won " + manUnitedWins + " games");
