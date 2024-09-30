// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

//       <form 
//   name="contact" 
//   method="POST" 
//   data-netlify="true" 
//   style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px', margin: 'auto' }}
// >
//   <input type="hidden" name="form-name" value="contact" />
//   <p style={{ margin: '0' }}>
//     <label style={{ display: 'flex', flexDirection: 'column' }}>
//       Your Name: 
//       <input type="text" name="name" style={{ padding: '8px', marginTop: '5px' }} />
//     </label>
//   </p>
//   <p style={{ margin: '0' }}>
//     <label style={{ display: 'flex', flexDirection: 'column' }}>
//       Your Email: 
//       <input type="email" name="email" style={{ padding: '8px', marginTop: '5px' }} />
//     </label>
//   </p>
//   <p style={{ margin: '0' }}>
//     <label style={{ display: 'flex', flexDirection: 'column' }}>
//       Your Role: 
//       <select name="role[]" multiple style={{ padding: '8px', marginTop: '5px' }}>
//         <option value="leader">Leader</option>
//         <option value="follower">Follower</option>
//       </select>
//     </label>
//   </p>
//   <p style={{ margin: '0' }}>
//     <label style={{ display: 'flex', flexDirection: 'column' }}>
//       Message: 
//       <textarea name="message" style={{ padding: '8px', marginTop: '5px' }}></textarea>
//     </label>
//   </p>
//   <p style={{ margin: '0' }}>
//     <button 
//       type="submit" 
//       style={{ padding: '10px 15px', backgroundColor: '#0070f3', color: '#ffffff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
//     >
//       Send
//     </button>
//   </p>
// </form>


//       </main>
//       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="https://nextjs.org/icons/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="https://nextjs.org/icons/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="https://nextjs.org/icons/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }

import Image from "next/image";
import * as contentful from 'contentful';

const spaceId = process.env.CONTENTFULL_SPACE_ID as string;
const accessToken = process.env.CONTENTFULL_ACCESS_TOKEN as string;
const environment = process.env.ENVIRONMENT || 'dev';

const client = contentful.createClient({
  space: spaceId,
  accessToken: accessToken,
  environment: environment,
});

// Adjusted interface to make fields optional
interface ContentfulEntry {
  fields: {
    name?: string; // Made optional
    email?: string; // Made optional
    contentId?: string; // Made optional
  
    image?: {
      fields: {
        altText?: string; // Made optional
        webImageUrl?: string; // Made optional
      };
    };
  };
}

async function fetchContentfulData(): Promise<{ entry: ContentfulEntry | null; error: string | null }> {
  try {
    const entry = await client.getEntry(process.env.ENTRY_ID as string);
    console.log('Contentful Entry:', entry);
    return { entry, error: null }; // Return entry and no error
  } catch (error) {
    console.error('Error fetching Contentful entry:', error);
    return { entry: null, error: (error as Error).message || 'An error occurred while fetching the entry.' }; // Return null entry and the error message
  }
}

const Home = async () => {
  const { entry, error } = await fetchContentfulData(); // Destructure entry and error

  console.log('Contentful Entry (Client Side):', entry);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        
        {/* Netlify Form */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          action="/success"
          netlify-honeypot="bot-field"
          style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px', margin: 'auto' }}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>
          <p style={{ margin: '0' }}>
            <label style={{ display: 'flex', flexDirection: 'column' }}>
              Your Name:
              <input type="text" name="name" style={{ padding: '8px', marginTop: '5px' }} required />
            </label>
          </p>
          <p style={{ margin: '0' }}>
            <label style={{ display: 'flex', flexDirection: 'column' }}>
              Your Email:
              <input type="email" name="email" style={{ padding: '8px', marginTop: '5px' }} required />
            </label>
          </p>
          <p style={{ margin: '0' }}>
            <label style={{ display: 'flex', flexDirection: 'column' }}>
              Your Role:
              <select name="role[]" multiple style={{ padding: '8px', marginTop: '5px' }}>
                <option value="leader">Leader</option>
                <option value="follower">Follower</option>
              </select>
            </label>
          </p>
          <p style={{ margin: '0' }}>
            <label style={{ display: 'flex', flexDirection: 'column' }}>
              Message:
              <textarea name="message" style={{ padding: '8px', marginTop: '5px' }}></textarea>
            </label>
          </p>
          <p style={{ margin: '0' }}>
            <button
              type="submit"
              style={{ padding: '10px 15px', backgroundColor: '#0070f3', color: '#ffffff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
            >
              Send
            </button>
          </p>
        </form>

        {/* Display Contentful Entry */}
        {error && <p className="text-red-500">Error: {error}</p>} {/* Display error message */}
        {entry && (
          <div>
            {entry.fields.name && <h1>{entry.fields.name}</h1>}
            {entry.fields.image?.fields && (
              <div>
                <Image 
                  src={entry.fields.image.fields.webImageUrl || ''} // Fallback to empty string if undefined
                  alt={entry.fields.image.fields.altText || ''} // Fallback to empty string if undefined
                  width={500} // Set desired width
                  height={500} // Set desired height
                  quality={60} // Optional: set quality if needed
                />
            
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
