/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['links.google.com', 'cdn.sanity.io'],
  },
};

module.exports = nextConfig;

// const sanityClient = require('@sanity/client');

// const nextConfig = {
//   experimental: {
//     appDir: true,
//   },
//   images: {
//     domains: ['links.google.com', 'cdn.sanity.io'],
//   },
//   serverRuntimeConfig: {
//     sanity: {
//       projectId: 'YOUR_SANITY_PROJECT_ID', // Replace with your Sanity project ID
//       dataset: 'YOUR_SANITY_DATASET', // Replace with your Sanity dataset name
//       useCdn: process.env.NODE_ENV === 'production', // Use CDN in production
//     },
//   },
//   async serverMiddleware(config) {
//     // Create a new Sanity client
//     const { sanity } = config.options.serverRuntimeConfig;
//     const client = sanityClient({
//       projectId: sanity.projectId,
//       dataset: sanity.dataset,
//       useCdn: sanity.useCdn,
//     });

//     // Define a serverMiddleware to fetch Sanity content
//     config.server.use(async (req, res, next) => {
//       const slug = req.url.substring(1); // Remove the leading `/` from the URL
//       const query = groq`
//         *[_type=='post' && slug.current == $slug][0]
//         {
//           ...,
//           author->,
//           categories[]->
//         }
//       `;
//       try {
//         const post = await client.fetch(query, { slug });
//         req.sanityPost = post; // Attach the fetched post to the request object
//         next();
//       } catch (error) {
//         console.error('Error fetching Sanity content:', error);
//         res.statusCode = 500;
//         res.end();
//       }
//     });
//   },
// };

// module.exports = nextConfig;
