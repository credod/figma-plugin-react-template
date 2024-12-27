import { useEffect } from 'react';

type CallbackType = (pluginMessage: Record<string, any>) => void;

export default function useOnPluginMessage(callback: CallbackType) {
  useEffect(() => {
    window.onmessage = (event: MessageEvent) => {
      const { pluginMessage } = event.data;
      callback(pluginMessage);
    };
  }, []);
}
