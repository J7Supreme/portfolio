import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Mic, MicOff } from 'lucide-react';
import { motion } from 'framer-motion';

interface InputSectionProps {
    onGenerate: (prompt: string) => void;
    isGenerating: boolean;
}

const SUGGESTIONS = [
    { label: '🏎️ Fast Racecar', value: 'A fast red racecar with racing stripes', color: 'chip-blue' },
    { label: '🏰 Spooky Castle', value: 'A spooky purple castle with towers', color: 'chip-purple' },
    { label: '🦖 Green Dino', value: 'A cute green dinosaur with big teeth', color: 'chip-green' },
];

export const InputSection: React.FC<InputSectionProps> = ({ onGenerate, isGenerating }) => {
    const [prompt, setPrompt] = useState('');
    const [isListening, setIsListening] = useState(false);
    const recognitionRef = useRef<any>(null);

    useEffect(() => {
        // Initialize Web Speech API
        if (typeof window !== 'undefined') {
            const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
            if (SpeechRecognition) {
                const recognition = new SpeechRecognition();
                recognition.continuous = false;
                recognition.interimResults = true;
                recognition.lang = 'en-US';

                recognition.onresult = (event: any) => {
                    const transcript = Array.from(event.results)
                        .map((result: any) => result[0].transcript)
                        .join('');
                    setPrompt(transcript);
                };

                recognition.onend = () => {
                    setIsListening(false);
                };

                recognitionRef.current = recognition;
            }
        }
    }, []);

    const toggleListen = () => {
        if (isListening) {
            recognitionRef.current?.stop();
            setIsListening(false);
        } else {
            setPrompt(''); // Clear current prompt on new voice dictation
            recognitionRef.current?.start();
            setIsListening(true);
        }
    };

    const handleGenerate = () => {
        if (prompt.trim() && !isGenerating) {
            onGenerate(prompt);
        }
    };

    return (
        <section className="input-section glass-panel">
            <h2>What do you want to build today?</h2>

            <div className="input-wrapper">
                <input
                    type="text"
                    placeholder="A red monster truck with spikes..."
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="magic-input"
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') handleGenerate();
                    }}
                    disabled={isGenerating}
                />
                {recognitionRef.current && (
                    <button
                        className={`btn-mic ${isListening ? 'listening' : ''}`}
                        onClick={toggleListen}
                        aria-label={isListening ? "Stop listening" : "Start voice input"}
                        disabled={isGenerating}
                    >
                        {isListening ? <MicOff color="white" /> : <Mic color="var(--color-primary)" />}
                    </button>
                )}
            </div>

            <div className="suggestions">
                <p>Try saying:</p>
                <div className="suggestion-chips">
                    {SUGGESTIONS.map((sug, i) => (
                        <button
                            key={i}
                            className={`chip ${sug.color}`}
                            onClick={() => setPrompt(sug.value)}
                            disabled={isGenerating}
                        >
                            {sug.label}
                        </button>
                    ))}
                </div>
            </div>

            <motion.button
                className="btn-chunky btn-primary generate-btn"
                onClick={handleGenerate}
                whileHover={{ scale: isGenerating ? 1 : 1.05 }}
                whileTap={{ scale: isGenerating ? 1 : 0.95 }}
                disabled={isGenerating || !prompt.trim()}
                style={{ opacity: isGenerating || !prompt.trim() ? 0.6 : 1, cursor: isGenerating ? 'not-allowed' : 'pointer' }}
            >
                <Sparkles size={24} className={isGenerating ? "spin" : ""} />
                {isGenerating ? "Making Magic..." : "Make Magic!"}
            </motion.button>
        </section>
    );
};
