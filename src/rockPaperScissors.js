/* exported rockPaperScissors */

/*
 * Write a function that generates every sequence of throws a single
 * player could play over a three-round game of rock-paper-scissors.
 *
 * Your output should look something like:
 *   [["rock", "rock", "rock"],
 *    ["rock", "rock", "paper"],
 *    ["rock", "rock", "scissors"],
 *    ["rock", "paper", "rock"],
 *    ...etc...
 *   ]
 *
 * After you finish it, change your function so that it return answers for any number of rounds.
 * Example:
 *   rockPaperScissors(4); // => [['rock', 'rock', 'rock', 'rock'], etc...]
 */

const rockPaperScissors = (n) => {
  // Your code here
  if (typeof n === "undefined"){
    n = 3
  } 
  let rounds = n;
  let weapons = ["rock", "paper", "scissors"]
  let result =[]

  
  function recurse (roundsLeft, played){
    if(roundsLeft === 0){
      result.push(played)
      return
    }
    for (let i = 0; i < weapons.length; i++){
      let current = weapons[i]
      recurse (roundsLeft-1,played.concat(current))
    }
  }
  recurse(rounds, [])
  return result

};
