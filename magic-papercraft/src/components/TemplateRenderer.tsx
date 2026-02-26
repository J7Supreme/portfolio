import React from 'react';
import { TEMPLATES } from '../lib/templates';

interface TemplateRendererProps {
    templateType: string;
    textureUrl: string;
}

export const TemplateRenderer: React.FC<TemplateRendererProps> = ({ templateType, textureUrl }) => {
    const template = TEMPLATES[templateType] || TEMPLATES['box']; // Default to box if unmapped
    const svgContent = template.svgMarkup(textureUrl);

    return (
        <div
            className="svg-renderer-wrapper"
            // Dangerously set inner HTML because we control the SVG generator explicitly
            dangerouslySetInnerHTML={{ __html: svgContent }}
            style={{ width: '100%', height: '100%' }}
        />
    );
};
