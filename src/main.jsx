import { render } from 'preact'
import './index.css'
import { App } from './app.jsx'
import '@google/model-viewer';

render(<App />, document.getElementById('app'))
