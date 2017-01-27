#!/usr/bin/env bash
rm docs/css/style.css
rm docs/*.html
rm docs/*.js
rm docs/build/*.png
rm docs/build/*.jpg
rm docs/build/wa/*.jpg
echo "docs folder reset"

#minify html
html-minifier index.html -o docs/index.html --collapse-whitespace --remove-comments --collapse-boolean-attributes --remove-empty-attributes
html-minifier alt_index.html -o docs/alt_index.html --collapse-whitespace --remove-comments --collapse-boolean-attributes --remove-empty-attributes
html-minifier about.html -o docs/about.html --collapse-whitespace --remove-comments --collapse-boolean-attributes --remove-empty-attributes
html-minifier portfolio.html -o docs/portfolio.html --collapse-whitespace --remove-comments --collapse-boolean-attributes --remove-empty-attributes
echo "HTML minified"

#imagemin all images
imagemin build/wa/* --out-dir=docs/build/wa
imagemin build/* --out-dir=docs/build

#minify css
cssnano < css/style.css > docs/css/style.css
echo "CSS minified"

#uglify js
uglifyjs --compress --mangle -o docs/main.js -v -- main.js
echo "JS minified"
