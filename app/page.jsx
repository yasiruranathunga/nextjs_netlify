export default function Page() {
  return (
    <form name="contact" method="POST" data-netlify="true" action="/thank-you">
      <input type="hidden" name="form-name" value="contact" />
      
      <label>
        Name: <input type="text" name="name" required />
      </label>
      
      <label>
        Email: <input type="email" name="email" required />
      </label>
      
      <label>
        Message:
        <textarea name="message" required></textarea>
      </label>
      
      <button type="submit">Send</button>
    </form>
  );
}

