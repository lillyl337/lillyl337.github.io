# Oxford Board Games Society website

A simple static website template for GitHub Pages, built with HTML, CSS, JavaScript and Bootstrap 5.3.

## Pages

- `index.html` - Welcome Page
- `committee.html` - Committee Page
- `termcard.html` - Termcard
- `mailing-list.html` - Mailing List
- `library.html` - Board Game Library
- `documents.html` - Society Documents

## Editing content

Most society-specific content is in `assets/site.js`:

- `committee` contains committee members
- `termcard` contains weekly events
- `documents` contains document links
- `data/games.yaml` contains the board-game library

Add PDFs or other files to the `documents/` directory and update their paths in `assets/site.js`.

## Bootstrap

The site loads Bootstrap 5.3.3 from jsDelivr. No build step or package manager is required.
