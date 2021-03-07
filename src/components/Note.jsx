import React from "react";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";

const Note = (props) => {
  function handledClick() {
    props.onDelete(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handledClick}>
        <DeleteRoundedIcon />
      </button>
    </div>
  );
};

export default Note;
