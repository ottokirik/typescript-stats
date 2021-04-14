import { MatchData } from '../MatchData';
import { MatchResult } from '../MatchResult';
import { Analyzer } from '../Summary';

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    const wins = matches.reduce(
      (acc: number, itemRow: MatchData): number =>
        (itemRow[1] === this.team && itemRow[5] === MatchResult.HomeWin) ||
        (itemRow[2] === this.team && itemRow[5] === MatchResult.AwayWin)
          ? acc + 1
          : acc,
      0
    );
    return `${wins}`;
  }
}
