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
- `games` contains the board-game library

Add PDFs or other files to the `documents/` directory and update their paths in `assets/site.js`.

## Bootstrap

The site loads Bootstrap 5.3.3 from jsDelivr. No build step or package manager is required.

## GitHub Pages

Upload the contents of this folder to a GitHub repository. In GitHub, open Settings -> Pages and choose the branch/folder you want to publish (normally the repository's main branch and `/root`).

## Mailing list

`mailing-list.html` contains a non-functional template form. GitHub Pages cannot process form submissions on its own. Replace the form `action` with your university mailing-list signup URL or another external form service.
