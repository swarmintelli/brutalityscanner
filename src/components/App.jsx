import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';
import Upload from './Upload';
import Stats from './Stats'
import About from './About';
import Video from './Video';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  var [notes, setNotes] = React.useState([]);

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
      <Router>
        <Switch>
          <Route path='/' exact component={App} />
          <Route path='/upload' exact component={Upload} />
          <Route path='/stats' exact component={Stats} />
          <Route path='/about' exact component={About} />
          <Route path='/video/:id' component={Video} />
        </Switch>
      </Router>
      <CreateArea onAdd={addNote}/>
      {notes.map((x, index) => <Note id={index} title={x.title} content={x.content} onDelete={deleteNote}/>)}
      <Footer />
    </div>
  );
}

export default App;