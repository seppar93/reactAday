import React from "react";

type HangManWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
};
function HangmanWord({ guessedLetters, wordToGuess }: HangManWordProps) {
  console.log('wordToGuess =>', wordToGuess)
  console.log('guessedLetters =>', guessedLetters)


  return (
    <div
      style={{
        display: "flex",
        gap: ".25em",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >
      {wordToGuess.split("").map((letter, index) => (
        <span
          style={{
            borderBottom: ".1em solid black",
          }}
          key={index}
        >
          <span
            style={{
              visibility: guessedLetters.includes(letter)
                ? "visible"
                : "hidden ",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}

export default HangmanWord;
