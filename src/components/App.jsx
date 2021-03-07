import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";

const App = () => {
  const [notes, setNote] = useState([]);

  function createNote(note) {
    setNote((prevItem) => {
      const data = [...prevItem, note];
      return data;
    });
  }

  function deleteNote(id) {
    setNote((prevItem) => {
      return prevItem.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={createNote} />
      {notes.map((note, index) => {
        return (
          <Note
            title={note.title}
            content={note.content}
            key={index}
            id={index}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
};

export default App;
