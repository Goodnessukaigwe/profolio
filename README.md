# Goodness Ukaigwe Portfolio

A static, responsive developer portfolio built with HTML, CSS, and JavaScript. The interface uses a console-inspired design system with four SPA-style views: Home, Projects, Skills, and Contact.

## Run locally

```bash
python -m http.server 8000
```

Open <http://localhost:8000> in a browser.

## Architecture

- `index.html` is the single application entry point.
- Each page-like view is a `<section data-view="...">` inside the shared shell.
- `js/script.js` switches views through URL hashes such as `#projects`, keeps navigation state in sync, filters projects, validates the contact form, and runs reveal animations.
- `css/style.css` contains the design tokens, responsive dashboard layout, shared console cards, status indicators, project cards, and mobile bottom navigation.
- `images/` contains the profile photo and project screenshots used by the interface.

## Views

- **Home:** profile, role, metrics, about text, current status, and social links.
- **Projects:** HowFar, Student Management System, Serphida, and Zetoe Academy with their existing live and source links.
- **Skills:** frontend, backend/blockchain, delivery, tools, and a code-style stack summary.
- **Contact:** inquiry form, availability panel, email, GitHub, and LinkedIn channels.

## Customization

1. Update the content in `index.html`.
2. Change design tokens at the top of `css/style.css`.
3. Replace project and profile assets inside `images/`.
4. Replace `your.email@example.com` in `index.html` and `js/script.js` with the verified contact email before deployment.

The contact form currently prepares a `mailto:` message rather than sending data to a backend service.
