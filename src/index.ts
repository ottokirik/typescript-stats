import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';
import { MatchReader, MatchData } from './MatchReader';

const matchReader = new MatchReader(new CsvFileReader('football.csv'));

matchReader.load();

const matches = matchReader.matches;

const manUnitedWins = matches.reduce(
  (acc: number, itemRow: MatchData): number =>
    (itemRow[1] === 'Man United' && itemRow[5] === MatchResult.HomeWin) ||
    (itemRow[2] === 'Man United' && itemRow[5] === MatchResult.AwayWin)
      ? acc + 1
      : acc,
  0
);

console.log(`Man United won ${manUnitedWins} games`);
