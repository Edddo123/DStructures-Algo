/*

  There's an algorithms tournament taking place in which teams of programmers
  compete against each other to solve algorithmic problems as fast as possible.
  Teams compete in a round robin, where each team faces off against all other
  teams. Only two teams compete against each other at a time, and for each
  competition, one team is designated the home team, while the other team is the
  away team. In each competition there's always one winner and one loser; there
  are no ties. A team receives 3 points if it wins and 0 points if it loses. The
  winner of the tournament is the team that receives the most amount of points.

  <p>
  Given an array of pairs representing the teams that have competed against each
  other and an array containing the results of each competition, write a
  function that returns the winner of the tournament. The input arrays are named
  competitions      and    results    , respectively. The
  competitions      array has elements in the form of
  [homeTeam, awayTeam]     , where each team is a string of at most 30
  characters representing the name of the team. The      results       array
  contains information about the winner of each corresponding competition in the
  competitions      array. Specifically,   results[i]     denotes
  the winner of      competitions[i]      , where a    1       in the
  results       array means that the home team in the corresponding
  competition won and a      0     means that the away team won.
</p>

  */

// O(n) complexity, my solution
function tournamentWinner(competitions, results) {
  let resultMap = {};

  // length of result and competitors are same
  for (let i = 0; i < competitions.length; i++) {
    // if home team won, create object with key of hometeam name and increase score
    if (results[i] === 1) {
      if (competitions[i][0] in resultMap) {
        let score = resultMap[competitions[i][0]].score;
        resultMap[competitions[i][0]] = { score: score + 3 };
      } else {
        resultMap[competitions[i][0]] = { score: 3 };
      }
    } 
    // if away team won, increase away team point
    else {
      if (competitions[i][1] in resultMap) {
        let score = resultMap[competitions[i][1]].score;
        resultMap[competitions[i][1]] = { score: score + 3 };
      } else {
        resultMap[competitions[i][1]] = { score: 3 };
      }
    }
  }


  let max = 0;
  let winner = "";
  // determine winner who has biggest score
  for (let key in resultMap) {
    if (!winner) {
      winner = key;
      max = resultMap[key].score;
    }
    if (max < resultMap[key].score) {
      winner = key;
      max = resultMap[key].score;
    }
  }

  return winner;
}


// same idea but cleaner code answer

const HOME_TEAM_WON = 1;

// O(n) time | O(k) space - where n is the number
// of competitions and k is the number of teams
function tournamentWinner(competitions, results) {
  let currentBestTeam = '';
  const scores = {[currentBestTeam]: 0};

  for (let idx = 0; idx < competitions.length; idx++) {
    const result = results[idx];
    const [homeTeam, awayTeam] = competitions[idx];

    const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;

    updateScores(winningTeam, 3, scores);

    if (scores[winningTeam] > scores[currentBestTeam]) {
      currentBestTeam = winningTeam;
    }
  }

  return currentBestTeam;
}

function updateScores(team, points, scores) {
  if (!(team in scores)) scores[team] = 0;

  scores[team] += points;
}


// cleaner answer from community
function tournamentWinner(competitions, results) {
    const leader = { score: -Infinity, name: '' };
    const scoreboard = {};
  
    for (let i = 0; i < competitions.length; i++) {
      const winnerIdx = results[i] === 0 ? 1 : 0;
      const winner = competitions[i][winnerIdx];
      
      if (winner in scoreboard) scoreboard[winner] += 3;
      else scoreboard[winner] = 3;
  
      if (leader.score < scoreboard[winner]) { 
        leader.name = winner;
        leader.score = scoreboard[winner];
      }
    }
    
    return leader.name;
  }
  
  // Do not edit the line below.
  exports.tournamentWinner = tournamentWinner;
  
