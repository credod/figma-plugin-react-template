import React, { useRef } from 'react';
import useOnPluginMessage from '../hooks/useOnPluginMessage';
import triggerPluginAction from '../util/triggerPluginAction';
import { PLUGIN_ACTIONS } from '../constants';

function App() {
  const inputRef = useRef(null)

  const onCreate = () => {
    const text = inputRef.current.value;
    triggerPluginAction({ type: PLUGIN_ACTIONS.CREATE_BUTTON, text })
  };

  const onCancel = () => {
    triggerPluginAction({ type: PLUGIN_ACTIONS.CANCEL } )
  };

  // This is how we read messages sent from the plugin controller
  useOnPluginMessage((pluginMessage) => {
    console.log(pluginMessage);

    const { type, message } = pluginMessage;
    if (type === PLUGIN_ACTIONS.CREATE_BUTTON) {
      console.log(`Figma Says: ${message}`);
    }
  });

  return (
    <div>
      <h1>Button Creator</h1>
      <p>
        Title <input ref={inputRef} />
      </p>
      <button onClick={onCreate}>
        Create
      </button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
}

export default App;
