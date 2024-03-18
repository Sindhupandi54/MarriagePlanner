import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import './Feedback.css';
import axios from 'axios';

export default function Feedback() {
    const [feedback, setFeedback] = useState('');

    const handleSubmitFeedback = () => {
        // Here you would send the feedback data to the server using an HTTP request
        axios.post('http://example.com/feedback', { feedback })
            .then(response => {
                console.log('Feedback submitted successfully:', response.data);
                // Optionally, you can handle success feedback submission here
            })
            .catch(error => {
                console.error('Error submitting feedback:', error);
                // Optionally, you can handle error feedback submission here
            });
    };

    return (
        <>
            <Navbar />
            <div className="feedback-container">
                <span className="feedback-message">
                    Your booking is done! Sent a Confirmation message to your Registered Email.
                </span>
                <div className="feedback-textarea">
                    <textarea
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        cols="30"
                        rows="5"
                        placeholder="Please leave your feedback or rating here"
                    ></textarea>
                </div>
                <input
                    type="button"
                    value="Submit Feedback"
                    className="Feedback-Submit-button"
                    onClick={handleSubmitFeedback}
                />
            </div>
        </>
    );
};
