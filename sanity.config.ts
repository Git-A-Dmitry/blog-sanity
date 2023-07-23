import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';
import { myTheme } from './theme';
import StudioNavbar from './components/StudioNavbar';
import { getDefaultDocumentNode } from './structure';
import { codeInput } from '@sanity/code-input';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: '/studio',
  name: 'default',
  title: 'blog-project',

  projectId,
  dataset,

  plugins: [deskTool({ defaultDocumentNode: getDefaultDocumentNode }), visionTool(), codeInput()],

  schema: {
    types: schemaTypes,
  },

  studio: {
    components: {
      // logo: logo,
      navbar: StudioNavbar,
    },
  },

  theme: myTheme,
});
