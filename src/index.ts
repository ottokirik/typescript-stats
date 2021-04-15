import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';
import { HtmlReport } from './reportTargets/HtmlReport';

const matchReader = new MatchReader(new CsvFileReader('football.csv'));

matchReader.load();

const { matches } = matchReader;

const summary = new Summary(new WinsAnalysis('Leicester'), new HtmlReport());

summary.buildAndPrintReport(matches);
