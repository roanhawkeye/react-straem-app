import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers);

const target = document.querySelector("#root");
const root = createRoot(target);
root.render(
<Provider store={store}>
    <App />
</Provider>
);