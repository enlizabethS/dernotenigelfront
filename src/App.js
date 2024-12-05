// src/App.js
import React from 'react';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <header className="app-header">
                <h1 className="app-title">Musical Note Application</h1>
            </header>
            <main>
                <NoteForm />
                <NoteList />
            </main>
        </div>
    );
};

export default App;
