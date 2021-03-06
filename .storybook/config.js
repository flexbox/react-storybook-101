import { configure } from '@storybook/react';
import 'storybook-chromatic/storybook-addon';

import '../src/index.css';

const req = require.context('../src', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
