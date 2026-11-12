# Solar System Code Tune

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/solar-system-code-tune-project/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

Runnable interactive recreation of the Solar System Full Information video.

## Run

No npm packages or build step required.

```bash
cd solar-system-code-tune
python -m http.server 8000
```

Open http://localhost:8000.

## Files

- `index.html` — solar system markup, orbit diagram, planet selector and information card
- `style.css` — dark space theme, concentric orbits, planet styling and responsive layout
- `script.js` — planet selection and information updates

## Features

- Sun and eight planets with illustrative orbit rings
- Select planets from the diagram or list
- Shows type, diameter, day length, orbital period, known moons, distance and description
- Responsive desktop and mobile layout

## Accuracy note

The supplied video contains small HTML/CSS snippets that are partially readable. This project reconstructs the visible solar-system interface and implements a working planet information panel. Planet sizes and orbit distances are illustrative, not to scale. Data is approximate and moon counts may change as discoveries are confirmed.
