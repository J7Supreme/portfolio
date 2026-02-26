export interface HistoryItem {
    id: string;
    prompt: string;
    imageUrl: string;
    templateType: string;
    createdAt: number;
}

const STORAGE_KEY = 'magic_papercraft_history';

export const saveToHistory = (item: Omit<HistoryItem, 'id' | 'createdAt'>) => {
    try {
        const history = getHistory();
        const newItem: HistoryItem = {
            ...item,
            id: Math.random().toString(36).substring(2, 9),
            createdAt: Date.now(),
        };

        // Keep only last 10 items to avoid storage bloat
        const updatedHistory = [newItem, ...history].slice(0, 10);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedHistory));
        return newItem;
    } catch (error) {
        console.error('Failed to save history:', error);
        return null;
    }
};

export const getHistory = (): HistoryItem[] => {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.error('Failed to load history:', error);
        return [];
    }
};
