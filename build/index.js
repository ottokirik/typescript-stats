"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var MatchReader_1 = require("./MatchReader");
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var matchReader = new MatchReader_1.MatchReader(new CsvFileReader_1.CsvFileReader('football.csv'));
matchReader.load();
var matches = matchReader.matches;
console.log("Man United won " + new WinsAnalysis_1.WinsAnalysis('Man United').run(matches) + " games");
