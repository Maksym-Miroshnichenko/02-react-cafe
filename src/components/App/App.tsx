import { useState } from 'react';
import css from './App.module.css';
import CafeInfo from '../CafeInfo/CafeInfo';
import Notification from '../Notification/Notification';
import VoteOptions from '../VoteOptions/VoteOptions';
import VoteStats from '../VoteStats/VoteStats';
import type { VoteType, Votes } from '../../types/votes';


function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0
  });

  function resetVotes() {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0
    });
  }

  function addVote(type: VoteType) {
    setVotes((currentVotes) => ({
      ...currentVotes,
      [type]: currentVotes[type] + 1
    }));
  }

  const totalVotes = votes.good + votes.neutral + votes.bad;

  return (
    <>
    <div className={css.app}>
      <CafeInfo/>
      <VoteOptions
        onVote={addVote}
        resetVotes={resetVotes}
        hasVotes={totalVotes > 0}
      />
      {totalVotes === 0 ? <Notification /> : <VoteStats votes={votes} />}
    </div>
    </>
  )
};
export default App