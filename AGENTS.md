# Repository Guidelines

This repository contains a static personal website with Chinese (`index.html`) and English (`index-en.html`) versions. It uses Bootstrap 5 with custom CSS and JavaScript under `css/` and `js/`.

## Adding content
- Keep both Chinese and English pages in sync when adding new sections or updating information.
- Place images under `assets/` and styles under `css/`. Custom scripts should go in `js/`.

## Style
- HTML files should be formatted with [Prettier](https://prettier.io/). Run:
  ```bash
  npx prettier index.html index-en.html css/*.css js/*.js --write
  ```
- Keep the markup simple and semantic. Use Bootstrap 5 classes where possible.

## Testing
This project has no automated tests. After modifications, run Prettier as shown above to ensure consistent formatting.
