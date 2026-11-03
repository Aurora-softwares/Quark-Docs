import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://aurora-softwares.github.io',
  base: '/Quark-Docs',
  trailingSlash: 'always',
  integrations: [
    starlight({
      title: 'Quark IDE',
      description: 'Simple, friendly guides for the Hydrogen IDE.',
      logo: { src: './src/assets/quark-mark.svg' },
      social: [
        { icon: 'github', label: 'Quark IDE on GitHub', href: 'https://github.com/Aurora-softwares/Quark-IDE' },
      ],
      editLink: { baseUrl: 'https://github.com/Aurora-softwares/Quark-Docs/edit/Release/' },
      customCss: ['./src/styles/starlight.css'],
      head: [
        { tag: 'meta', attrs: { name: 'theme-color', content: '#f9f8ff' } },
      ],
      sidebar: [
        { label: 'Welcome', link: '/' },
        { label: 'Documentation hub', slug: 'docs' },
        {
          label: 'Learn by doing',
          items: [
            { label: 'Install Quark', slug: 'docs/install' },
            { label: 'Your first project', slug: 'docs/first-project' },
          ],
        },
        {
          label: 'Using Quark',
          items: [
            { label: 'Explore the workspace', slug: 'docs/workspace' },
            { label: 'Build and run', slug: 'docs/build' },
            { label: 'Design an interface', slug: 'docs/designer' },
            { label: 'Themes and extensions', slug: 'docs/personalise' },
          ],
        },
        {
          label: 'Help and progress',
          items: [
            { label: 'Screenshots', slug: 'docs/screenshots' },
            { label: 'Common questions', slug: 'docs/help' },
            { label: 'Development status', slug: 'docs/status' },
          ],
        },
      ],
    }),
  ],
});
