// src/components/NoteForm.js
import React, { useState } from 'react';
import axios from 'axios';

const NoteForm = () => {
    const [name, setName] = useState('');
    const [pitch, setPitch] = useState('');
    const [duration, setDuration] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newNote = { name, pitch, duration: parseFloat(duration) };

        try {
            await axios.post('/api/notes', newNote); // Adjust the URL as necessary
            // Reset form
            setName('');
            setPitch('');
            setDuration('');
        } catch (error) {
            console.error('Error creating note:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Pitch"
                value={pitch}
                onChange={(e) => setPitch(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                required
            />
            <button type="submit">Add Note</button>
        </form>
    );
};

export default NoteForm;
