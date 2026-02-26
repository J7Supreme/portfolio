import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Printer } from 'lucide-react';
import { TemplateRenderer } from './TemplateRenderer';
import { TEMPLATES } from '../lib/templates';

interface PreviewCanvasProps {
    templateData: any | null;
    isGenerating: boolean;
}

export const PreviewCanvas: React.FC<PreviewCanvasProps> = ({ templateData, isGenerating }) => {
    const handlePrint = () => {
        if (!templateData) return;

        const templateType = templateData.templateType || 'box';
        const textureUrl = templateData.url || templateData;
        const template = TEMPLATES[templateType] ?? TEMPLATES['box'];

        // Generate the raw SVG string
        const svgString = template.svgMarkup(textureUrl);

        // Open a minimal print window containing only the SVG — most reliable
        // cross-browser approach for printing SVGs with embedded base64 images
        const printWindow = window.open('', '_blank', 'width=900,height=1200');
        if (!printWindow) {
            alert('Please allow pop-ups to print.');
            return;
        }

        printWindow.document.write(`<!DOCTYPE html>
<html>
<head>
  <title>Magic Paper Toy</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body { width: 210mm; height: 297mm; background: white; }
    @page {
      size: A4 portrait;
      margin: 0;
    }
    svg {
      display: block;
      width: 210mm;
      height: 297mm;
    }
    @media print {
      html, body { width: 210mm; height: 297mm; }
    }
  </style>
</head>
<body>
  ${svgString}
  <script>
    // Wait for images in SVG to load before printing
    window.onload = function() {
      setTimeout(function() {
        window.print();
        window.close();
      }, 800);
    };
  </script>
</body>
</html>`);

        printWindow.document.close();
    };

    return (
        <section className="preview-section glass-panel">
            <AnimatePresence mode="wait">
                {!templateData && !isGenerating && (
                    <motion.div
                        key="empty"
                        className="preview-empty"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="preview-placeholder-graphic">✨</div>
                        <h3>Your toy will appear here!</h3>
                        <p>Type what you want above, and watch the magic happen.</p>
                    </motion.div>
                )}

                {isGenerating && (
                    <motion.div
                        key="loading"
                        className="preview-loading"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                    >
                        <div className="magic-wand-loader">🪄</div>
                        <h3>Sprinkling magic dust...</h3>
                        <p>Gathering the perfect shapes and colors.</p>
                    </motion.div>
                )}

                {templateData && !isGenerating && (
                    <motion.div
                        key="result"
                        className="preview-result"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <div className="a4-canvas">
                            <TemplateRenderer
                                templateType={templateData.templateType || 'box'}
                                textureUrl={templateData.url || templateData}
                            />
                        </div>

                        <div className="preview-actions">
                            <button className="btn-chunky btn-secondary" onClick={handlePrint}>
                                <Printer size={24} />
                                Print (A4)
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};
