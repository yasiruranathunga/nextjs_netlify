// contentfulClient.js
import { createClient } from 'contentful';

const client = createClient({
  space: '4jb9o1hgieof',       // Your Contentful space ID
  accessToken: 'QWyEkvGo8wMh-oOvcVvIAuLJcEcG2kpXEG-xpDQIB8s', // Your Contentful access token
  environment:'dev'
});

export default client;
