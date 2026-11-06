# Alaa Zamly — portfolio

Live at https://alaazamly.github.io/ALAAZAMLY/

A static site for GitHub Pages: no build step, no server code. Every address is built for the path `/ALAAZAMLY/`.

## Folders

- `index.html`, `work/`, `about/`, `contact/`, `project/<name>/` — one real page per address, each with its own title, description and share card.
- `assets/css/style.css`, `assets/js/main.js` — styles and script.
- `assets/img/` — all images (`assets/img/work/` holds the project images); `og-cover.jpg` is the share card.
- `assets/fonts/` — Canela Condensed.
- `404.html`, `sitemap.xml`, `site.webmanifest`, `favicon.ico`.

## Notes

- Submit `sitemap.xml` in Google Search Console (property `https://alaazamly.github.io/ALAAZAMLY/`) so Google finds every page.
- The contact form opens the visitor's email app (`mailto:`).
- After editing `style.css` or `main.js`, change the `?v=` value after the file name in the HTML files so visitors get the new version.
- If you move to your own domain, the paths need regenerating; don't edit them by hand.
