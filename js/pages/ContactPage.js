import { getJson } from "../api.js";

async function submitContactMessage(form) {
  const status = document.getElementById("form-status");

  const contactMessage = {
    name: form.name.value.trim(),
    email: form.email.value.trim(),
    message: form.message.value.trim(),
    createdAt: new Date().toISOString(), // Use ISO format so the backend can store a standardized timestamp.
    status: "new",
  };

  status.textContent = "Sending your message...";

  try {
    await getJson("/contactMessages", {
      method: "POST",
      body: JSON.stringify(contactMessage),
    });

    form.reset();
    status.textContent = "Message sent! We will reply soon.";
  } catch (error) {
    console.error(error);
    status.textContent =
      "Sorry, your message could not be sent. Please try again later.";
  }
}

document.addEventListener("submit", (event) => {
  // Find the nearest form element with the contact form ID.
  // This makes sure only our contact page form is handled here.
  const form = event.target.closest("#contact-form");
  if (!form) return;

  event.preventDefault();
  submitContactMessage(form);
});

export async function ContactPage() {
  let contactInfo = {
    email: "hello@sharksschool.com",
    phone: "+1 (555) 010-2026",
    address: "The Digital Ocean, Learning Harbor",
    hours: "Monday–Friday, 9:00 AM–5:00 PM",
  };

  try {
    contactInfo = await getJson("/contactInfo/1");
  } catch (error) {
    console.error("Failed to load contact info", error);
  }

  return `
      <section class="contact-hero container">
        <h1 class="page-title">Ready to Make a Splash? Get in Touch!</h1>
        <p>
          Have a question about our underwater academy? Whether you're a curious
          minnow or a hungry shark, we're here to help you navigate your
          learning journey.
        </p>
      </section>

      <section class="contact-section container">
        <div class="contact-form-card">
          <h2 class="visually-hidden">Send us a message</h2>
          <form class="contact-form" id="contact-form" aria-describedby="form-status">
            <div class="contact-form__field">
              <label for="name-input">Your Name</label>
              <input
                id="name-input"
                type="text"
                name="name"
                autocomplete="name"
                placeholder="Finley Sharkington"
                required
              />
            </div>
            <div class="contact-form__field">
              <label for="email-input">Email Address</label>
              <input
                id="email-input"
                type="email"
                name="email"
                autocomplete="email"
                placeholder="finley@ocean.com"
                required
              />
            </div>
            <div class="contact-form__field">
              <label for="message-input">Message</label>
              <textarea
                id="message-input"
                name="message"
                rows="6"
                placeholder="How can we help you thrive in the deep blue?"
                required
              ></textarea>
            </div>
            <p class="form-state" id="form-status" aria-live="polite">
              Our crew usually replies within 1–2 school days.
            </p>
            <button class="button button--primary submit-form" type="submit">
              Send Message
              <img
                src="../../assets/send-message-icon.png"
                alt=""
                width="19"
                height="16"
              />
            </button>
          </form>
        </div>
        <div class="school-details">
          <h2 class="visually-hidden">School contact information</h2>
          <div class="contact-details-card">
            <p><strong>Email:</strong> ${contactInfo.email}</p>
            <p><strong>Phone:</strong> ${contactInfo.phone}</p>
            <p><strong>Address:</strong> ${contactInfo.address}</p>
            <p><strong>Hours:</strong> ${contactInfo.hours}</p>
          </div>
          <img
            class="contact-decoration"
            src="../../assets/Decorative Image.png"
            alt=""
            width="489"
            height="210"
            loading="lazy"
            aria-hidden="true"
          />
        </div>
      </section>
      <img
        class="contact-wave"
        src="../../assets/Wave Divider.png"
        alt=""
        width="1280"
        height="150"
        aria-hidden="true"
      />
    `;
}
