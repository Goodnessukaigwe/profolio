# Personal Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript.

## 🚀 Quick Start

1. **View Locally**

   ```bash
   # Option 1: Open directly in browser
   open index.html

   # Option 2: Run a local server
   python -m http.server 8000
   # Then visit: http://localhost:8000
   ```

2. **Customize Your Content**
   - Replace "Your Name" in `index.html`
   - Update the about section with your bio
   - Add your real projects with descriptions and links
   - Update skills to match your expertise
   - Replace placeholder images in `images/` folder
   - Change email in `js/script.js` (line 72)

## 📁 Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # All styles
├── js/
│   └── script.js          # Interactive features
├── images/
│   ├── profile.svg        # Your profile photo
│   └── projects/          # Project screenshots
│       ├── project1.svg
│       ├── project2.svg
│       └── project3.svg
└── README.md              # This file
```

## ✨ Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Modern gradient hero section
- ✅ Project showcase with hover effects
- ✅ Skills section organized by category
- ✅ Contact form with validation
- ✅ Smooth scrolling navigation
- ✅ Mobile-friendly hamburger menu
- ✅ Scroll animations
- ✅ Clean, maintainable code with comments

## 🎨 Customization

### Colors

Edit CSS variables in `css/style.css`:

```css
:root {
  --primary-color: #6366f1; /* Main brand color */
  --secondary-color: #8b5cf6; /* Accent color */
  --accent-color: #ec4899; /* Highlights */
}
```

### Sections

- **Hero**: Update name, title, and description in `index.html`
- **About**: Write your bio
- **Projects**: Add/remove project cards, update links
- **Skills**: Modify skill categories and items
- **Contact**: Change email address in `js/script.js`

### Images

Replace placeholder SVGs with your own:

- Profile photo: `images/profile.svg` (recommended: 400x400px)
- Project screenshots: `images/projects/*.svg` (recommended: 800x600px)

## 🌐 Deployment

### GitHub Pages (Free)

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

Then enable GitHub Pages in repository settings.

### Netlify (Free)

1. Sign up at [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Your site is live!

### Vercel (Free)

```bash
npm i -g vercel
vercel
```

## 📝 To-Do List

Customize these items:

- [ ] Replace "Your Name" with your actual name
- [ ] Add your profile photo
- [ ] Write your about section
- [ ] Add 3+ real projects with links
- [ ] Update skills list
- [ ] Add your social media links
- [ ] Change contact email
- [ ] Add your GitHub, LinkedIn, Twitter handles
- [ ] Test on mobile devices
- [ ] Deploy to hosting platform

## 📄 License

Free to use for personal and commercial projects.

## 🤝 Support

Found this helpful? Give it a ⭐ on GitHub!

---

**Made with ❤️ using HTML, CSS & JavaScript**
