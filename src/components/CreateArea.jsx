import { Fab, Zoom } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [expand, setExpand] = useState(false);

  function handledChange(e) {
    const { name, value } = e.target;
    setNote((prevalue) => {
      const data = {
        ...prevalue,
        [name]: value,
      };
      return data;
    });
  }
  function submitNote(e) {
    props.onAdd(note);
    e.preventDefault();
    resetNote();
  }

  function resetNote() {
    setNote({
      title: "",
      content: "",
    });
  }

  function handledExpand() {
    setExpand(true);
  }
  return (
    <div>
      <form onSubmit={submitNote} className="create-note">
        {expand && (
          <input
            onChange={handledChange}
            type="text"
            name="title"
            placeholder="Title"
            value={note.title}
          />
        )}
        <textarea
          onChange={handledChange}
          onClick={handledExpand}
          name="content"
          placeholder="Take a note..."
          rows={expand ? 3 : 1}
          value={note.content}
        ></textarea>
        <Zoom in={expand}>
          <Fab type="submit">
            <Add></Add>
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
