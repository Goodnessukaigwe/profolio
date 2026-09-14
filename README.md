# Goodness Ukaigwe Portfolio

A static, responsive developer portfolio built with HTML, CSS, and JavaScript. The interface uses a reference-inspired editorial design system with persistent light and dark themes across four SPA-style views: Home, Projects, Skills, and Contact.

## Run locally

```bash
python -m http.server 8000
```

Open <http://localhost:8000> in a browser.

## Architecture

- `index.html` is the single application entry point.
- Each page-like view is a `<section data-view="...">` inside the shared shell.
- `js/script.js` switches views through URL hashes such as `#projects`, keeps navigation state in sync, filters projects, validates the contact form, and runs reveal animations.
- `css/style.css` contains the light/dark design tokens, Plus Jakarta Sans and JetBrains Mono typography, responsive editorial layout, bordered content panels, project cards, skill catalog, and navigation.
- `images/` contains the profile photo and project screenshots used by the interface.

## Views

- **Home:** profile, role, metrics, about text, current status, and social links.
- **Projects:** HowFar, Student Management System, Serphida, Zetoe Academy, Eklan, and Kadsamsha with their relevant live and source links.
- **Skills:** programming languages, web and mobile development, backend and databases, analytics/payments/monitoring, infrastructure, and core technical competencies.
- **Contact:** inquiry form, availability panel, email, GitHub, and LinkedIn channels.

## Customization

1. Update the content in `index.html`.
2. Change design tokens at the top of `css/style.css`.
3. Replace project and profile assets inside `images/`.
4. Replace `your.email@example.com` in `index.html` and `js/script.js` with the verified contact email before deployment.

The contact form currently prepares a `mailto:` message rather than sending data to a backend service.
