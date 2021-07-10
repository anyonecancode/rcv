#!/usr/bin/env node

const votes = [
            ["Adams", "Stringer", "Yang", "Garcia", "Wiley"],
            ["Adams", "Yang", "Yang", "Garcia", "Wiley"],
            ["Adams", "Garcia", "Yang", "Wiley"],
            ["Yang", "Garcia", "Yang", "Garcia", "Wiley"],
            ["Yang", "Garcia", "Yang", "Garcia", "Wiley"],
            ["Garcia", "Yang", "Yang", "Garcia", "Wiley"],
            ["Garcia", "Yang", "Yang", "Garcia", "Wiley"],
            ["Garcia", "Yang", "Yang", "Garcia", "Wiley"],
            ["Wiley", "Adams", "Stringer"]
        ];


function tabulate(votes, round) {
  let vote_count = {};
  let total_votes = 0;
  let highest_candidate = null;
  let lowest_candidate = null;

  votes.forEach(v => {
    let candidate = v[0]
    if (candidate !== undefined) {
      vote_count[candidate] = (vote_count[candidate] || 0) + 1;
      total_votes += 1;
    }
  });

  Object.keys(vote_count).forEach(e => {
    if (lowest_candidate === null || vote_count[e] < lowest_candidate[1]) {
      lowest_candidate = [e, vote_count[e]];
    }

    if (highest_candidate === null || vote_count[e] > highest_candidate[1]) {
      highest_candidate = [e, vote_count[e]];
    }
  });

  highest_candidate[2] = (highest_candidate[1]/total_votes);

  console.log(`*****\nStart of round ${round}:`);
  console.log("\tVotes: " + JSON.stringify(vote_count));
  console.log(`\t${total_votes} total votes`);
  console.log(`\t${highest_candidate[0]} leads with ${highest_candidate[1]}, which is ${(highest_candidate[2]*100).toFixed(2)}%`);

  if (highest_candidate[2] > 0.5) {
    console.log(`\nWinner is ${highest_candidate[0]}\n*****`);
  } else {
    console.log(`\nNo winner this round; eliminating ${lowest_candidate[0]}.\n*****\n\n`);
    votes.forEach(v => {
      if (v[0] === lowest_candidate[0]) {
        v.shift();
      }
    });

    tabulate(votes, round+1);
  }
}

tabulate(votes, 1);
