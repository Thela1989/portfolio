import ReactDOM from 'react-dom/client';
import App from './App';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import './index.css';
import './i18n';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <MantineProvider>
    <App />
  </MantineProvider>,
);
