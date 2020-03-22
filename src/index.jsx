import { h, render } from 'preact';
import { App } from './component/App';
import './index.scss';

addEventListener('DOMContentLoaded', () => {
    render(<App/>, document.getElementById('root'));
});
