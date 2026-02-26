import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Printer } from 'lucide-react';
import { getHistory, type HistoryItem } from '../lib/storage';

interface HistoryCarouselProps {
    onSelectHistory: (item: HistoryItem) => void;
    refreshTrigger: number; // Increment this to force reload
}

export const HistoryCarousel: React.FC<HistoryCarouselProps> = ({ onSelectHistory, refreshTrigger }) => {
    const [history, setHistory] = useState<HistoryItem[]>([]);

    useEffect(() => {
        setHistory(getHistory());
    }, [refreshTrigger]);

    if (history.length === 0) return null;

    return (
        <section className="history-section glass-panel">
            <h3>Your Toy Box (Recent Magic)</h3>
            <div className="history-scroll-container">
                <AnimatePresence>
                    {history.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            className="history-card"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            onClick={() => onSelectHistory(item)}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="history-img-wrapper">
                                <img src={item.imageUrl} alt={item.prompt} />
                            </div>
                            <div className="history-text">
                                <p className="history-prompt">"{item.prompt}"</p>
                                <button className="btn-icon">
                                    <Printer size={16} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </section>
    );
};
