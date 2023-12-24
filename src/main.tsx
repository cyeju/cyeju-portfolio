import React from 'react';
import ReactDOM from 'react-dom/client';
import { ColorBox } from './components/atoms/ColorBox.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ColorBox>add</ColorBox>
  </React.StrictMode>,
);
