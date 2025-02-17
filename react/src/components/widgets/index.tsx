import ButtonWidget from './ButtonWidget';
import WindowWidget from './WindowWidget';

export { default as ButtonWidget } from './ButtonWidget';
export { default as WindowWidget } from './WindowWidget';

export const widgets = [
  {
    id: 'button-widget',
    name: 'Button Widget',
    component: ButtonWidget,
  },
  {
    id: 'window-widget',
    name: 'Window Widget',
    component: WindowWidget,
  },
];
