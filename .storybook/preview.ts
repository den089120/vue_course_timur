import type { Preview} from '@storybook/vue3'
import '../src/App/styles/index.scss'
// const st = require('../src/App/styles/index.scss')


const preview: Preview = {

  // decorators: [() => ({ template: '<div style="margin: 3em;"><story/></div>' })],
  decorators: [
    (story) => ({
      components: { story },// <component is="style" type="text/css" >${st}</component>
      template: `
        <div style="margin: 2rem;">
        <story/>
        </div>`,
    }),
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
