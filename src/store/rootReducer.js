import { combineReducers } from 'redux';
import immutables from './immutables/reducers'
import optionsContainer from './optionsContainer/reducers'
import canvasContainer from './canvasContainer/reducer'

const rootReducer = combineReducers({
	immutables,
	optionsContainer,
	canvasContainer
});

export default rootReducer;
