import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './NoteList.css';

const NoteList = () => {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchNotes();
    }, []);

    const fetchNotes = async () => {
        try {
            const response = await axios.get('/api/notes');
            setNotes(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching notes:', error);
            setError('Failed to fetch notes. Please try again later.');
            setLoading(false);
        }
    };

    if (loading) return <p className="loading-message">Loading notes...</p>;
    if (error) return <p className="error-message">{error}</p>;

    return (
        <div className="note-list">
            <h1 className="list-title">Notes</h1>
            <div className="notes-container">
                {notes.map((note) => (
                    <div key={note.id} className="note-card">
                        <h3 className="note-name">{note.name}</h3>
                        <p><strong>Pitch:</strong> {note.pitch}</p>
                        <p><strong>Duration:</strong> {note.duration} seconds</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NoteList;
