import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
export default defineConfig({
 site:'https://aurora-softwares.github.io',base:'/Quark-Docs',trailingSlash:'always',
 integrations:[starlight({
  title:'Quark IDE',description:'Simple guides to the Hydrogen IDE',
  logo:{src:'./src/assets/quark-mark.svg'},
  social:[{icon:'github',label:'GitHub',href:'https://github.com/Aurora-softwares/Quark-IDE'}],
  customCss:['./src/styles/starlight.css'],
  editLink:{baseUrl:'https://github.com/Aurora-softwares/Quark-Docs/edit/Development/'},
  sidebar:[
    {label:'Welcome',slug:'docs'},
    {label:'Get started',items:[{label:'Install Quark',slug:'docs/install'},{label:'Your first project',slug:'docs/first-project'}]},
    {label:'Using Quark',items:[{label:'The workspace',slug:'docs/workspace'},{label:'Build & run',slug:'docs/build'},{label:'The UI designer',slug:'docs/designer'},{label:'Themes & extensions',slug:'docs/personalise'}]},
    {label:'Help',items:[{label:'Screenshots',slug:'docs/screenshots'},{label:'Common questions',slug:'docs/help'},{label:'Development status',slug:'docs/status'}]}
  ]})]
});