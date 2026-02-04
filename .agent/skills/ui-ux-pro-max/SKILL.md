---
name: UI/UX Pro Max
description: Generates professional UI/UX design systems and recommendations.
---

# UI/UX Pro Max

This skill generates comprehensive design systems, color palettes, and component recommendations based on your project description.

## Usage

When the user asks for design advice, a style guide, or to "build a [type] website", use this skill.

### Steps

1.  **Analyze Request**: Identify the type of application (e.g., "Saas Dashboard", "Beauty Spa", "Fintech App").
2.  **Generate Design System**:
    Run the search script to generate a design system.
    
    ```bash
    python3 ".agent/skills/ui-ux-pro-max/src/ui-ux-pro-max/scripts/search.py" "<USER_QUERY>" --design-system
    ```

    *Replace <USER_QUERY> with the user's intent keywords (e.g., "Minimalist Portfolio Website").*

3.  **Read Output**: The script will output a design system plan. Use this plan to inform your CSS variables (colors, fonts) and component styling.

### Domain Specific Search

If you need specific inspiration:
*   **Styles**: `python3 ".agent/skills/ui-ux-pro-max/src/ui-ux-pro-max/scripts/search.py" "<QUERY>" --domain style`
*   **Typography**: `python3 ".agent/skills/ui-ux-pro-max/src/ui-ux-pro-max/scripts/search.py" "<QUERY>" --domain typography`
*   **Colors**: `python3 ".agent/skills/ui-ux-pro-max/src/ui-ux-pro-max/scripts/search.py" "<QUERY>" --domain color`
