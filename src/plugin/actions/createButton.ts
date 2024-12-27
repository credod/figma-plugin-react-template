import { PLUGIN_ACTIONS } from '../../app/constants';

export default async function createButton(msg) {
  const nodes = [];

  const referenceButton = figma.root.findOne(
    (node) => node.type === 'COMPONENT' && node.name === 'Button'
  ) as ComponentNode;
  const instanceButton = referenceButton.createInstance();

  const text = instanceButton.findChild((node) => node.type === 'TEXT' && node.name === 'Title') as TextNode;
  await figma.loadFontAsync({ family: 'Inter', style: 'Regular' });
  text.characters = msg.text;

  nodes.push(instanceButton);
  figma.currentPage.selection = nodes;
  figma.viewport.scrollAndZoomIntoView(nodes);

  // This is how figma responds back to the ui
  figma.ui.postMessage({
    type: PLUGIN_ACTIONS.CREATE_BUTTON,
    message: `Created Button Instance with the title: ${msg.text}`,
  });

  figma.closePlugin();
}
