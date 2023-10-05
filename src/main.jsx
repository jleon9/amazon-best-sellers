import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

/* 
For application deployment, connect to Netlify, 
drag and drop the dist folder in https://app.netlify.com/drop
*/

// To create git repository and add it to github, check this link:
// https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github?platform=windows