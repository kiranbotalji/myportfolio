# PHP Laravel Developer Portfolio

A modern, responsive personal portfolio website built with HTML, CSS, JavaScript, and Bootstrap.

## Features

- Clean professional UI/UX (dark blue + white theme)
- Fully responsive layout (mobile + desktop)
- Smooth scrolling navigation
- Timeline-style experience section
- Scroll reveal animations
- Font Awesome icons
- Resume download button
- Contact form with prefilled `mailto` support

## Project Structure

```text
myportfolio/
|- index.html
|- LICENSE
|- README.md
`- assets/
   |- css/
   |  `- style.css
   |- js/
   |  `- script.js
   `- resume/
      |- Kiran_Botalji_PHP_Laravel_Developer_8Yrs.pdf
```

## Run Locally

1. Place folder inside your web server root (WAMP already uses this path).
2. Start Apache from WAMP.
3. Open in browser: `http://localhost/myportfolio/`

## Customize

Update these in `index.html`:

- Name, title, tagline
- LinkedIn and GitHub profile URLs
- Contact details (email, phone, location)

Resume file:

- Keep your resume in `assets/resume/`
- Update the hero button `href` if filename changes

## Contact Form

The form currently opens your default email app using `mailto`.

Configured receiver email in `assets/js/script.js`:

- `const receiverEmail = "botaljikiran@gmail.com";`

## Tech Stack

- HTML5
- CSS3
- JavaScript (ES6)
- Bootstrap 5
- Font Awesome

## License

This project uses a custom Personal Portfolio License.
All rights are reserved by the author. Reuse, redistribution, impersonation, or misuse of portfolio information is not allowed.
See [LICENSE](LICENSE).

