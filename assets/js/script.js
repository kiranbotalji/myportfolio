(() => {
  const navbar = document.getElementById("mainNav");
  const currentYear = document.getElementById("currentYear");
  const fadeElements = document.querySelectorAll(".fade-up");
  const contactForm = document.getElementById("contactForm");
  const statusEl = document.getElementById("formStatus");
  const receiverEmail = "youremail@example.com";

  const onScroll = () => {
    if (!navbar) return;
    navbar.classList.toggle("scrolled", window.scrollY > 30);
  };

  const revealOnView = () => {
    if (!("IntersectionObserver" in window)) {
      fadeElements.forEach((el) => el.classList.add("show"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    fadeElements.forEach((el) => observer.observe(el));
  };

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear().toString();
  }

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = document.getElementById("name")?.value.trim() || "";
      const email = document.getElementById("email")?.value.trim() || "";
      const message = document.getElementById("message")?.value.trim() || "";

      if (!name || !email || !message) {
        if (statusEl) {
          statusEl.textContent = "Please fill in all fields before sending.";
          statusEl.className = "small mb-3 text-danger";
          statusEl.classList.remove("d-none");
        }
        return;
      }

      const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      );
      window.location.href = `mailto:${receiverEmail}?subject=${subject}&body=${body}`;

      if (statusEl) {
        statusEl.textContent = "Your email app has been opened with a prefilled message.";
        statusEl.className = "small mb-3 text-success";
        statusEl.classList.remove("d-none");
      }
    });
  }

  window.addEventListener("scroll", onScroll);
  onScroll();
  revealOnView();
})();


