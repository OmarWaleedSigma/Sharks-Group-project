export function ContactPage(){
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
          <form class="contact-form" aria-describedby="form-status">
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
          <img
            class="contact-details"
            src="../../assets/Contact Info Card.png"
            alt="SHARKS Online School contact information"
            width="503"
            height="292"
            loading="lazy"
          />
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
    `
}