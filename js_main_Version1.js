// Basic UI interactions: mobile nav toggle + form client-side UX
document.addEventListener('DOMContentLoaded', function () {
  // Nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const navList = document.getElementById('nav-list');
  if (toggle && navList) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      navList.classList.toggle('show');
    });
  }

  // Form submission handling: show success/failure message without page reload.
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const submitBtn = document.getElementById('submit-btn');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
      status.hidden = true;

      try {
        // Replace action with your own Formspree endpoint in the HTML form action attribute.
        const action = form.getAttribute('action');
        const res = await fetch(action, {
          method: 'POST',
          body: data,
          headers: { 'Accept': 'application/json' }
        });

        if (res.ok) {
          form.reset();
          status.textContent = 'Thanks — your message has been sent. We will contact you shortly.';
          status.style.color = 'green';
          status.hidden = false;
        } else {
          const json = await res.json();
          status.textContent = json?.error || 'There was a problem sending your message. Please try again later.';
          status.style.color = 'crimson';
          status.hidden = false;
        }
      } catch (err) {
        status.textContent = 'Network error. Please check your connection and try again.';
        status.style.color = 'crimson';
        status.hidden = false;
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
      }
    });
  }
});