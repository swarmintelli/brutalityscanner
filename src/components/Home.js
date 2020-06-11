import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';
import testnotes from '../notes.js'
import Upload from './Upload';
import Stats from './Stats'
import About from './About';
import Video from './Video';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Home() {
  var [notes, setNotes] = React.useState(testnotes);

  function addNote(note) {
    setNotes((prev) => {
      return [...prev, note];
    })
  }

  function deleteNote(id) {
    setNotes((prev) => {
      return prev.filter((noteItem, index) => {
        return index !== id;
      })
    })
  }

  return(
      <div>
        <Header />
          <h2 className='hometitle' >A fully anonymous platform for collecting and storing evidence of state sponsored brutality</h2>
          <CreateArea onAdd={addNote}/>
          {notes.map((x, index) => <Note id={index} title={x.title} content={x.content} onDelete={deleteNote}/>)}
        <Footer />
      </div>
  );
}

export default Home;