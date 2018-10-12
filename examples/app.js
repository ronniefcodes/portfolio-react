import 'Theme';
import render from 'Utils/run';
import config from './config';

render(config || {}, 'react-root');
