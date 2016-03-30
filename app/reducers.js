import { combineReducers } from 'redux'
import React from 'react-native'

const {
	NavigationExperimental
} = React
const {
	Reducer: NavigationReducer
} = NavigationExperimental

const initialNavState = {
	key: 'MainNavigation',
	index: 0,
	children: [
		{ key: 'First' }
	]
}

const navigationState = NavigationReducer.StackReducer({
	initialState: initialNavState,
	getPushedReducerForAction: (action) => {
		if (action.type === 'push') {
			return (_, action) => action.state
		}
		
		return null
	}
})


const appReducers = combineReducers({
	navigationState
})

export default appReducers