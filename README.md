# RPG Society static website

A plain HTML/CSS/JavaScript website designed for GitHub Pages.

## Files

- `index.html` — welcome page
- `termcard.html` — weekly termcard
- `documents.html` — important documents
- `committee.html` — committee page
- `library.html` — searchable board-game library
- `join.html` — mailing-list signup page
- `assets/styles.css` — site styling
- `assets/site.js` — shared navigation, termcard data, game library data, interactions

## Publish on GitHub Pages

1. Create a repository and copy these files into its root.
2. Commit and push to GitHub.
3. In **Settings → Pages**, choose **Deploy from a branch**.
4. Select your main branch and `/ (root)`.
5. Save. GitHub will publish the site.

## Most common edits

### Change the society name
Search for `RPG Society` in the HTML and `assets/site.js`.

### Update the termcard
Edit the `events` array near the top of `assets/site.js`.

### Update the game library
Edit the `games` array in `assets/site.js`.

### Add real documents
Put PDFs in a `documents/` directory and change the `href="#"` links in `documents.html`, or point them to external files.

### Connect the mailing list
In `join.html`, replace `action="#"` with your mailing provider's form endpoint and change `data-configured="false"` to `data-configured="true"`.

## Custom domain
If you later use a custom domain, add a `CNAME` file containing the domain name and configure the relevant DNS records with your registrar.
