document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contact-form');

  contactForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const formData = new FormData(contactForm);

      // Send form data to the server
      fetch('/submit-form', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(Object.fromEntries(formData))
      })
      .then(response => response.text())
      .then(message => {
          alert(message);
          contactForm.reset();
      })
      .catch(error => console.error(error));
  });
});

