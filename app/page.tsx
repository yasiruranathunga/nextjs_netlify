import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-2xl font-bold">Contact Us</h1>
        {submitted ? (
          <p className="text-green-500">Thank you for your message!</p>
        ) : (
          <form
            name="contact" // This should match the name of your form
            netlify // This enables Netlify's form handling
            className="flex flex-col gap-4"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <div>
              <label htmlFor="name" className="block text-sm">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="border rounded p-2 w-full"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="border rounded p-2 w-full"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="border rounded p-2 w-full"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="rounded-full border border-solid border-transparent transition-colors bg-blue-500 text-white hover:bg-blue-700 text-sm h-10 px-4"
            >
              Submit
            </button>
          </form>
        )}
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
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
      </footer>
    </div>
  );
}
