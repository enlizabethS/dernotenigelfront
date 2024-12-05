import React, { useState } from 'react';
import axios from 'axios';
import './NoteForm.css';

const NoteForm = () => {
    const [name, setName] = useState('');
    const [pitch, setPitch] = useState('');
    const [duration, setDuration] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !pitch || isNaN(duration) || duration <= 0) {
            setError('Please fill out all fields correctly.');
            return;
        }
        setError('');

        const newNote = { name, pitch, duration: parseFloat(duration) };

        try {
            await axios.post('/api/notes', newNote); // Adjust the URL as necessary
            setName('');
            setPitch('');
            setDuration('');
        } catch (error) {
            console.error('Error creating note:', error);
            setError('Failed to create note. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="note-form">
            <h2 className="form-title">Add a New Note</h2>
            {error && <p className="error-message">{error}</p>}
            <div className="form-group">
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    placeholder="Pitch"
                    value={pitch}
                    onChange={(e) => setPitch(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <input
                    type="number"
                    placeholder="Duration (in seconds)"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    required
                    min="0.1"
                    step="0.1"
                />
            </div>
            <button type="submit" className="submit-button">Add Note</button>
        </form>
    );
};

export default NoteForm;
