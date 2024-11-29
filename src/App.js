// src/App.js
import React from 'react';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <NoteForm />
            <NoteList />
        </div>
    );
};

export default App;

