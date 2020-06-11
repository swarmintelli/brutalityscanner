import React, { useState } from "react";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import SearchIcon from '@material-ui/icons/Search';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [isExpanded, setExpanded] = React.useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        <input
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Search..."
          rows={isExpanded ? 3:1}
          onClick={expand}
        />
        <Zoom in={isExpanded}><Fab onClick={submitNote}><SearchIcon /></Fab></Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
