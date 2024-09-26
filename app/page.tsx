import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-2xl font-bold">Contact Us</h1>
        
        <form
          name="contact"
          method="POST"
          data-netlify="true" // Enable Netlify form handling
          netlify-honeypot="bot-field" // Optional honeypot field for spam protection
          className="flex flex-col gap-4 w-full max-w-md"
          onSubmit={(e) => {
            e.preventDefault();
            // Handle form submission if needed (e.g., show a success message)
          }}
        >
          <input type="hidden" name="form-name" value="contact" />
          
          <div>
            <label htmlFor="name" className="block mb-1">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block mb-1">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block mb-1">Message:</label>
            <textarea
              name="message"
              id="message"
              required
              rows={4}
              className="w-full p-2 border border-gray-300 rounded"
            ></textarea>
          </div>
          
          <div>
            <input type="hidden" name="bot-field" />
          </div>
          
          <button
            type="submit"
            className="rounded-full bg-blue-500 text-white py-2 px-4 hover:bg-blue-600 transition"
          >
            Send
          </button>
        </form>
      </main>
      
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
