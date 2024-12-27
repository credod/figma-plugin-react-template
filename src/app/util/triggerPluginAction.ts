type MessageType = Record<string, any> & {
  type: string;
}

export default function triggerPluginAction(pluginMessage: MessageType) {
  parent.postMessage({ pluginMessage }, '*');
}
