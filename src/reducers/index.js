import { combineReducers } from 'redux';

import series from './seriesDuck';
import serieAtual from './serieDuck';

export default combineReducers({ series, serieAtual });
