# Literary Quotes

A minimalist and beautifully designed quote gallery application built with React, Vite, and Tailwind CSS. The app fetches and displays quotes using the FreeAPI Quotes endpoints.

## Live Demo
**[projects.ashish.pro/quotes](https://projects.ashish.pro/quotes)**

## Features

- **Quote of the Day:** A dedicated hero section featuring a beautifully presented random "Quote of the Day".
- **Quote Gallery:** Browse through an extensive collection of quotes presented in elegant, minimalist cards.
- **Pagination:** Easy-to-use pagination controls to navigate gracefully between pages of quotes.
- **Responsive Design:** A fluid layout built with Tailwind CSS that looks perfect on both desktop and mobile devices.
- **Minimalist Aesthetic:** Clean "editorial/literary" theme using sharp borders, sophisticated typography (serif pairing), and smooth micro-interactions.
- **Refresh Control:** Custom spinning button animations ensuring visual feedback on API calls.

## Tech Stack

- **Framework:** React 19 (via Vite)
- **Styling:** Tailwind CSS (v4)
- **Icons:** Lucide React
- **API:** [FreeAPI](https://freeapi.app/)
- **Package Manager:** pnpm


## Component Structure

The app's UI is neatly organized into modular components (`src/components/`):

- `Header.jsx`: Top navigation containing the animated refresh button.
- `Hero.jsx`: Features the random "Quote of the Day".
- `QuoteCard.jsx`: The minimalist layout unit displaying individual quote content, author, and tags.
- `Pagination.jsx`: Controls for navigating through the quote gallery.
- `Loader.jsx`: Subtle dot-bounce loading animation.
- `Footer.jsx`: Clean baseline copyright footer.

## License

This project is licensed under the MIT License.
