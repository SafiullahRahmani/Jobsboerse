export default function Contact() {
  return (
    <div className="contact">
      <h3>Schreiben Sie uns eine Email</h3>
      <form>
        <label>
          <span>Ihre Email:</span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Ihre Nachricht:</span>
          <textarea name="message" required></textarea>
        </label>
        <button>Senden</button>
      </form>
    </div>
  );
}
