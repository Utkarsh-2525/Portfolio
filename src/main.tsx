/**
 * @copyright 2025 M.Utkarsh
 * @license Apache-2.0
 */

import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import 'lenis/dist/lenis.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App/>
    </StrictMode>,
)
