# PHP Laravel Developer Portfolio

A modern, responsive personal portfolio website built with HTML, CSS, JavaScript, and Bootstrap.

## Features

- Clean professional UI/UX (dark blue + white theme)
- Fully responsive layout (mobile + desktop)
- Smooth scrolling navigation
- Section-based portfolio structure
- Timeline-style experience section
- Animated reveal effects on scroll
- Font Awesome icons
- Contact form with prefilled `mailto` support

## Project Structure

```text
myportfolio/
├── index.html
├── LICENSE
├── README.md
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── script.js
    └── resume/
        └── resume-placeholder.pdf
```

## Run Locally

1. Put the project in your web server directory (already done for WAMP in this setup).
2. Start Apache from WAMP.
3. Open in browser:
   - `http://localhost/myportfolio/`

## Customization

Update these in `index.html`:

- `[Your Name]`
- Email, phone, location
- LinkedIn and GitHub links
- Resume file link

Update resume file:

- Replace `assets/resume/resume-placeholder.txt` with your real resume file (PDF recommended).
- If filename changes, update the hero "Download Resume" button link.

## Contact Form Behavior

The contact form currently opens the default email client using `mailto`.

To receive messages:

- Set your email in `assets/js/script.js`:
  - `const receiverEmail = "youremail@example.com";`

If you want real backend form submission later, connect it to a Laravel/PHP mail endpoint.

## Tech Stack

- HTML5
- CSS3
- JavaScript (ES6)
- Bootstrap 5
- Font Awesome

## License

This project uses a custom Personal Portfolio License.
All rights are reserved by the author. Reuse, redistribution, impersonation, or misuse of portfolio information is not allowed.
See the [LICENSE](LICENSE) file for details.
