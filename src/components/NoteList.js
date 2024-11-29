// src/components/NoteList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NoteList = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetchNotes();
    }, []);

    const fetchNotes = async () => {
        try {
            const response = await axios.get('/api/notes'); // Adjust the URL as necessary
            setNotes(response.data);
        } catch (error) {
            console.error('Error fetching notes:', error);
        }
    };

    return (
        <div>
            <h1>Notes</h1>
            <ul>
                {notes.map(note => (
                    <li key={note.id}>
                        {note.name} - {note.pitch} (Duration: {note.duration})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NoteList;
