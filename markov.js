"use strict"
const fsP = require("fs/promises");

/** Textual markov chain generator */

// ---- where do we handle pulling the text? ----

class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words;
    this.wordChain = {};
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {

    // look through index of words
    for (let wordIdx = 0; wordIdx < this.words.length; wordIdx++) {
      let currWord = this.words[wordIdx];
      if (!this.wordChain[currWord]) {
        this.wordChain[currWord] = [];
      }
      if (this.words[wordIdx + 1]) {
        this.wordChain[currWord].push(this.words[wordIdx + 1]);
      } else {
        this.wordChain[currWord].push(null);
      }
    }
    //console.log(this.wordChain);
    return this.wordChain;
  }

  /** return random text from chains */


  getText(numWords = 100) {

    // Object.keys() should return an array so we can get the length
    this.makeChains();
    let wordChainKeys = Object.keys(this.wordChain);
    let startingWord = randomChoice(wordChainKeys);
    console.log(startingWord);

    let markovTextResult = "";
    let currentWord = startingWord;

    console.log(this.wordChain[currentWord]);
    for (let numWordsCount = 0; numWordsCount < numWords; numWordsCount++) {

      if (!currentWord) {
        return markovTextResult;
      }
      let randomValueWord = randomChoice(this.wordChain[currentWord]);
      markovTextResult += randomValueWord;
      currentWord = randomValueWord;
      //console.log(currentWord);
    }
    console.log(markovTextResult);
    //return markovTextResult;
    //initialize counter variable at 0
    //initialize random key variable to be equal to some random value
    //less than or equal to the makeChains object's length

    //1- grabs any key in the chain object 
    //2- picks random value from that key
    //3- finds selected values key and repeats to step 1 

  }
}

//accepts an array and returns a random value from that array
function randomChoice(options) {
  return options[Math.floor(Math.random() * options.length)];
}

let mm = new MarkovMachine("the quick brown jumped over the lazy brown hat hello")
mm.getText();



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



