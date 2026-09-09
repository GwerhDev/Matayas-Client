import './styles/root.css';
import './styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import ReactDOM from 'react-dom/client';

config.autoAddCss = false;
import RouterApp from './app/router/RouterApp.jsx';
import { AppBoot } from './app/components/AppBoot/AppBoot';
import store from './middlewares/redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <AppBoot>
        <RouterApp/>
      </AppBoot>
    </BrowserRouter>
  </Provider>
)
