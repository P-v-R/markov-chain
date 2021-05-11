"use strict"
const fsP = require("fs/promises");

/** Textual markov chain generator */

// ---- where do we handle pulling the text? ----

class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    // MORE CODE HERE
    this.words = words;
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // MORE CODE HERE
    let wordChain = {};

    // look through index of words
    for (let wordIdx=0; wordIdx<this.words.length; wordIdx++){
      let currWord = this.words[wordIdx];
      if (!wordChain[currWord]){
        wordChain[currWord] = [];
      }
      if(this.words[wordIdx + 1]){
        wordChain[currWord].push(this.words[wordIdx + 1]);
      } else {
        wordChain[currWord].push(null);
      }
    }
    console.log(wordChain);
    return wordChain;
  }

  /** return random text from chains */


  getText(numWords = 100) {
    // MORE CODE HERE
  }
}

let mm = new MarkovMachine("the quick brown jumped over the lazy brown hat hello")




// -------------------------------------------------
// {"word": ["wordNext1","anotherWordNext","wordNext3",]}

// makechain() method
// for each word in words 
  // if word NOT in chain[word] add it as a key;
    // if not, add it as key
  // look to right of word and push it as words value pair

  // final return result from make chain method
  // -- {"word": ["wordNext1","anotherWordNext","wordNext3"].
  //     "difWord": ["wordNext1","anotherWordNext"]...}

  
  // getText func
  // index loop x numWords times with count var

  //1- grabs any key in the chain object 
    //2- picks random value from that key
      //3- finds selected values key and repeats to step 1 



