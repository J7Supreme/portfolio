import { useState } from 'react'
import { Wand2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { InputSection } from './components/InputSection'
import { PreviewCanvas } from './components/PreviewCanvas'
import { HistoryCarousel } from './components/HistoryCarousel'
import { saveToHistory, type HistoryItem } from './lib/storage'
import { generatePapercraft } from './lib/aiService'
import './App.css'
import './components/styles.css'

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || '';

function App() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [templateData, setTemplateData] = useState<any | null>(null)
  const [historyTrigger, setHistoryTrigger] = useState(0)
  const [error, setError] = useState<string | null>(null)

  const handleGenerate = async (prompt: string) => {
    setIsGenerating(true)
    setTemplateData(null)
    setError(null)

    try {
      const result = await generatePapercraft(GEMINI_API_KEY, prompt)

      const resultData = {
        url: result.textureUrl,
        prompt: result.refinedPrompt,
        templateType: result.templateType,
      }
      setTemplateData(resultData)

      saveToHistory({
        prompt: result.refinedPrompt,
        imageUrl: result.textureUrl,
        templateType: result.templateType,
      })
      setHistoryTrigger(prev => prev + 1)

    } catch (err: any) {
      setError(err?.message ?? 'Something went wrong. Please try again.')
    } finally {
      setIsGenerating(false)
    }
  }

  const handleSelectHistory = (item: HistoryItem) => {
    setTemplateData({
      url: item.imageUrl,
      prompt: item.prompt,
      templateType: item.templateType,
    })
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <motion.div
          className="logo-container"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <div className="logo-icon">
            <Wand2 size={28} color="white" />
          </div>
          <h1>Magic Paper Toys</h1>
        </motion.div>
      </header>

      {/* Error banner */}
      <AnimatePresence>
        {error && (
          <motion.div
            className="error-banner"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            ⚠️ {error}
          </motion.div>
        )}
      </AnimatePresence>

      <main className="main-content">
        <div className="left-column">
          <InputSection
            onGenerate={handleGenerate}
            isGenerating={isGenerating}
          />
        </div>
        <div className="right-column">
          <PreviewCanvas
            templateData={templateData}
            isGenerating={isGenerating}
          />
        </div>
        <div className="history-column">
          <HistoryCarousel
            onSelectHistory={handleSelectHistory}
            refreshTrigger={historyTrigger}
          />
        </div>
      </main>
    </div>
  )
}

export default App
