import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { WinsAnalysis } from './analyzers/WinsAnalysis';

const matchReader = new MatchReader(new CsvFileReader('football.csv'));

matchReader.load();

const matches = matchReader.matches;

console.log(
  `Man United won ${new WinsAnalysis('Man United').run(matches)} games`
);
