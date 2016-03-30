import React, { View, Text, SliderIOS, PropTypes, StyleSheet } from 'react-native'

import NavButton from './NavButton'

const SecondScreen = (props) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Second Screen</Text>

			<NavButton destLabel="Third" buttonHandler={props.onButtonPress} />

			<SliderIOS
				value={33}
				step={1}
				minimumValue={0}
				maximumValue={100}
				style={styles.slider}
			/>
		</View>
	)
}

SecondScreen.propTypes = {
	onButtonPress: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#D690CB',
		justifyContent: 'center',
		alignItems: 'center'
	},
	title: {
		fontSize: 24,
		fontWeight: '500',
		color: '#ffffff',
		marginBottom: 30
	},
	slider: {
		width: 300,
		marginTop: 30
	}
})

export default SecondScreen