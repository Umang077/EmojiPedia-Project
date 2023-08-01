import React from "react";
import Data from "./Data";
import emojipedia from "../emojipedia";

function createData(emojiData) {
  return (
    <Data
      key={emojiData.id}
      logo={emojiData.emoji}
      name={emojiData.name}
      paragraph={emojiData.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createData)}</dl>
    </div>
  );
}

export default App;
