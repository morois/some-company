Live: [https://example.com](https://example.com)

---

## Technologies Used

- [Vite](https://vitejs.dev/) – fast build tool and dev server
- [React](https://react.dev/) – UI library
- [TypeScript](https://www.typescriptlang.org/) – static type checking
- [MUI](https://mui.com/) – Material Design components for React

## Installation and Setup:

- `https://github.com/morois/some-company`
- `cd some-company`
- `nvm use`
- `npm install`
- `npm run dev` (Opens in your browser at: http://localhost:5173)

## Running with Netlify CLI

- Make sure Netlify CLI is installed: `npm install -g netlify-cli`
- `ntl dev`

## Styling

- Component styling is implemented using Material UI.
- CSS-in-JS is implemented using MUI's built-in `styled`.

## Performance

- Using Vite for extremely fast builds and module updates.

## This project includes the following custom hooks and components:

- `useScrollDirection`: A custom React hook that detects the direction of scrolling (up or down). This can be useful for implementing features like hiding navigation bars on scroll down.
- `ScrollToTop`: A React component that automatically scrolls the user to the top of the page whenever the route changes. This improves user experience, especially on single-page applications.
- `ScrollToTopButton`: A React component that renders a button (often a floating action button) that, when clicked, smoothly scrolls the user back to the top of the current page.
