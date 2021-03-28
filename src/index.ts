import { CsvFileReader } from './CsvFileReader';

const reader = new CsvFileReader('football.csv');
reader.read();

enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

const manUnitedWins = reader.data.reduce(
  (acc: number, itemRow: string[]): number =>
    (itemRow[1] === 'Man United' && itemRow[5] === MatchResult.HomeWin) ||
    (itemRow[2] === 'Man United' && itemRow[5] === MatchResult.AwayWin)
      ? acc + 1
      : acc,
  0
);

console.log(`Man United won ${manUnitedWins} games`);
