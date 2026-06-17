# MIUIGA: Agent Implementation Guide

This document is a "System Prompt" for AI agents (and human developers) working with the MIUIGA framework. Follow these rules to ensure generated code matches the framework's intent and aesthetic.

## 1. The Core Golden Rule
**Always wrap the entire application (or the MIUIGA sub-tree) in the `<RetroProvider>` component.**
Without this provider, themes (Classic vs. Modern) and global CSS variables will not function correctly.

## 2. Layout Philosophy: The Frameset
MIUIGA does not use standard "Flexbox-centric" stacking for primary layouts.
- **Convention**: Use `<Frameset>` as the root layout.
- **Sidebars**: Use `<Frame id="..." title="...">` for navigation or widgets.
- **Content**: Use `<MainFrame>` for the primary scrollable area.
- **Mobile**: Always include a `<Taskbar frames={[...]}>` at the bottom of the `<Frameset>`. It handles frame minimization/restoration on small screens.

## 3. Visual Grammar (Components)
When an agent is asked to build a UI, it should choose components based on these semantic rules:

| UI Need | MIUIGA Component | Variant/Prop |
| :--- | :--- | :--- |
| Primary Container | `<Panel>` | `variant="outset"` (Protruding) |
| Recessed Content Area | `<Panel>` | `variant="inset"` (Sunken) |
| Draggable Dialog | `<Window>` | Requires `title` |
| Primary Action | `<DitherShadow>` + `<Button>` | Wrap buttons in shadows for emphasis |
| Important News | `<Marquee>` | Continuous scroll |
| Theme Toggle | `useRetro().toggleModern` | Switch between 90s and 2010s |

## 4. Color & Aesthetic Standards
- **Palette**: Use the `snapToWebSafe(color)` utility if generating dynamic colors.
- **Bevels**: Do not override borders with "flat" styles. If a bevel is needed, use `<Panel>`.
- **Fonts**: Do not use "system-ui". Use the built-in "Times New Roman" or "Arial" presets.

## 5. Making Your Custom Components "Agent-Ready"
If you are tweaking MIUIGA or building your own "agent-ready" library, follow these patterns:
1. **Declarative Naming**: Name props by their *intent* (e.g., `density={25}`) rather than implementation details.
2. **JSDoc Comments**: Every exported component should have a JSDoc block. Agents use these as hints.
3. **Usage Examples**: Provide a "Minimal Reproducible Example" for every complex component.
4. **Agent Constraints**: Create an `AGENTS.md` file (like this one) to explicitly state what an agent *should not* do.

## 6. Common Code Patterns for Agents

### Basic Dashboard Template
```tsx
<RetroProvider>
  <Frameset>
    <Frame id="nav" title="Menu">
      <Button>HOME</Button>
    </Frame>
    <MainFrame>
      <Panel variant="outset">
        <h1>Welcome</h1>
      </Panel>
    </MainFrame>
    <Taskbar frames={[{ id: 'nav', title: 'Menu' }]} />
  </Frameset>
</RetroProvider>
```
