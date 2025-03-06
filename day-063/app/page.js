// app/page.js
'use client';
import { useState } from 'react';
import Scoreboard from '../components/Scoreboard';

export default function Home() {
  const [teamA, setTeamA] = useState({ name: 'Australia', score: 264, wickets: 10 });
  const [teamB, setTeamB] = useState({ name: 'India', score: 267, wickets: 6 });

  const updateScore = (team, type) => {
    if (team === 'A') {
      setTeamA((prev) => ({
        ...prev,
        score: type === 'run' ? prev.score + 1 : prev.score,
        wickets:
          type === 'wicket' && prev.wickets < 10
            ? prev.wickets + 1
            : prev.wickets,
      }));
    } else {
      setTeamB((prev) => ({
        ...prev,
        score: type === 'run' ? prev.score + 1 : prev.score,
        wickets:
          type === 'wicket' && prev.wickets < 10
            ? prev.wickets + 1
            : prev.wickets,
      }));
    }
  };

  return (
    <section className='scoreboard-container'>
      <h1>🏏 Champions Trophy - Semi-Final</h1>
      <div className='scoreboards'>
        <Scoreboard
          team={teamA}
          updateScore={() => updateScore('A', 'run')}
          addWicket={() => updateScore('A', 'wicket')}
        />
        <Scoreboard
          team={teamB}
          updateScore={() => updateScore('B', 'run')}
          addWicket={() => updateScore('B', 'wicket')}
        />
      </div>
      <h1>🏏 India won by 6 wickets 🎉🎉🎉🎊🎊🎊</h1>
    </section>
  );
}
