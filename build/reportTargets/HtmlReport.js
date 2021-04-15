"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var HtmlReport = /** @class */ (function () {
    function HtmlReport() {
    }
    HtmlReport.prototype.print = function (report) {
        var html = "\n        <!DOCTYPE html>\n        <html>\n            <head>\n                <meta charset=\"UTF-8\">\n                <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">  \n            </head>\n            <body>\n                <div>\n                    <h1>Analisys Output</h1>\n                    <p>" + report + "</p>\n                </div>\n            </body>\n        </html>\n    ";
        fs_1.default.writeFileSync('report.html', html);
    };
    return HtmlReport;
}());
exports.HtmlReport = HtmlReport;
