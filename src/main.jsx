import './styles/root.css';
import './styles/globals.css';
import ReactDOM from 'react-dom/client';
import RouterApp from './app/router/RouterApp.jsx';
import store from './middlewares/redux/store';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <HashRouter>
      <RouterApp/>
    </HashRouter>
  </Provider>
)
