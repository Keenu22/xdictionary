import { useState } from "react";

export default function Search() {
  const [inputText, setInputText] = useState('');
  const [meaning, setMeaning] = useState('');

  const dictionary = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ];

  function handleInput(event) {
    let text = event.target.value;
    setInputText(text);
  }

  function handleSearch() {
    const foundWord = dictionary.find(item => item.word.toLowerCase() === inputText.toLowerCase());
    if (foundWord) {
      setMeaning(foundWord.meaning);
    } else {
      setMeaning("Word not found in the dictionary.");
    }
  }

  return (
    <>
      <h1>Dictionary App</h1>
      <br />
      <input
        type="text"
        value={inputText}
        placeholder="Search for a word..."
        onChange={handleInput}
      />
      <button onClick={handleSearch}>Search</button>
      <p>Definition:</p>
      {meaning ? <p>{meaning}</p> : null}
    </>
  );
}
