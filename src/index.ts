import { MatchReader, MatchData } from './MatchReader';
import { MatchResult } from './MatchResult';

const reader = new MatchReader('football.csv');
reader.read();

const manUnitedWins = reader.data.reduce(
  (acc: number, itemRow: MatchData): number =>
    (itemRow[1] === 'Man United' && itemRow[5] === MatchResult.HomeWin) ||
    (itemRow[2] === 'Man United' && itemRow[5] === MatchResult.AwayWin)
      ? acc + 1
      : acc,
  0
);

console.log(`Man United won ${manUnitedWins} games`);
