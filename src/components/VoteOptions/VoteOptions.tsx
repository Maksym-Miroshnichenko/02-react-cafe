import css from './VoteOptions.module.css';
import type { VoteType } from '../../types/votes';

type VoteOptionsProps = {
  onVote: (type: VoteType) => void;
  resetVotes: () => void;
  hasVotes: boolean;
};

function VoteOptions({ onVote, resetVotes, hasVotes }: VoteOptionsProps) {
  return (
    <div className={css.container}>
      <button onClick={() => onVote('good')} className={css.button}>Good</button>
      <button onClick={() => onVote('neutral')} className={css.button}>Neutral</button>
      <button onClick={() => onVote('bad')} className={css.button}>Bad</button>
      {hasVotes && (
        <button onClick={resetVotes} className={`${css.button} ${css.reset}`}>Reset</button>
      )}
    </div>
  );
}

export default VoteOptions;