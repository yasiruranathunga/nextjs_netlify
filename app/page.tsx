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

interface ContentfulEntry {
  fields: {
    name: string;
    description?: string;
    email: string;
    contentId: string;
    publicationDate: string;
    image?: {
      fields: {
        altText: string;
        webImageUrl: string;
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
            {typeof entry.fields.name === 'string' && <h1>{entry.fields.name}</h1>}
            {typeof entry.fields.description === 'string' && <p>{entry.fields.description}</p>}
            {entry.fields.image && entry.fields.image.fields && (
              <div>
                <Image 
                  src={entry.fields.image.fields.webImageUrl} 
                  alt={entry.fields.image.fields.altText} 
                  width={500} // Set desired width
                  height={500} // Set desired height
                  quality={60} // Optional: set quality if needed
                />
                <p>Content ID: {entry.fields.contentId}</p>
                <p>Email: {entry.fields.email}</p>
                <p>Publication Date: {entry.fields.publicationDate}</p>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
