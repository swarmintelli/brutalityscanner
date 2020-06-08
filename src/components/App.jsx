import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
//import notes from '../notes';
import CreateArea from './CreateArea';

function App() {
  var [notes, setNotes] = React.useState([]);

  function addNote(note) {
    setNotes((prev) => {
      return [...prev, note];
    })
  }

  function deleteNote(id) {
    console.log('getting here');
    setNotes((prev) => {
      return prev.filter((noteItem, index) => {
        return index !== id;
      })
    })
  }

  return(
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      {notes.map((x, index) => <Note id={index} title={x.title} content={x.content} onDelete={deleteNote}/>)}
      <Footer />
    </div>
  );
}

export default App;