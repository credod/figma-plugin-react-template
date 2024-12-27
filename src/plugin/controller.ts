import { PLUGIN_ACTIONS } from '../app/constants';
import createButton from './actions/createButton';

figma.showUI(__html__);

figma.ui.onmessage = async (msg) => {
  switch (msg.type) {
    case PLUGIN_ACTIONS.CREATE_BUTTON:
      createButton(msg);
      break;

    case PLUGIN_ACTIONS.CANCEL:
      figma.closePlugin();
      break;

    default:
      console.error(
        `Unrecognized message type. Expected one of [${Object.values(PLUGIN_ACTIONS)}]. Received: ${msg.type}.`
      );
      break;
  }
};
