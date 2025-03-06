import PropTypes from 'prop-types';

export default function Scoreboard({ team, updateScore, addWicket }) {
  return (
    <div className='scoreboard'>
      <h2>{team.name}</h2>
      <p className='score'>
        Score: {team.score}/{team.wickets}
      </p>
      <div className='controls'>
        <button onClick={updateScore}>+1 Run</button>
        <button onClick={addWicket}>+1 Wicket</button>
      </div>
    </div>
  );
}

Scoreboard.propTypes = {
  team: PropTypes.shape({
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    wickets: PropTypes.number.isRequired,
  }).isRequired,
  updateScore: PropTypes.func.isRequired,
  addWicket: PropTypes.func.isRequired,
};
