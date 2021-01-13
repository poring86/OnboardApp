import React from 'react'
import { SafeAreaView, Text, View, StatusBar, Image, StyleSheet} from 'react-native'


import AppIntroSlider from 'react-native-app-intro-slider'
import LinearGradient from 'react-native-linear-gradient'
import colors from '../assets/colors/colors'



const data = [
	{
	  	title: 'Save time by tracking your studies',
	  	text: 'Description. Say something cool',
	  	image: require('../assets/images/Onboard1.png'),
	  	bg: '#59b2ab',
	},
	{
	  	title: 'Title 2',
	  	text: 'Other cool stuff',
	  	image: require('../assets/images/Onboard2.png'),
	  	bg: '#febe29',
	},
	{
		title: 'Rocket guy',
		text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
		image: require('../assets/images/Onboard3.png'),
		bg: '#22bcb5',
	},
]

const Onboard = (props) => {
	const renderItem = ({item}) => {
        return (
            <View style={styles.slide}>
				<Image source={item.image} style={styles.image} />
				<View>
					<Text style={styles.title}>{item.title}</Text>
					<Text style={styles.text}>{item.text}</Text>
				</View>
            </View>
        )
    }

	const keyExtractor = (item) => item.title
	
	const renderDoneButton = () => {
		return (
            <LinearGradient 
                colors={['#A5CBFF', '#232868']} 
                style={styles.doneButtonWrapper}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
            >
                <Text style={styles.doneButtonText}>
                    Done
                </Text>
            </LinearGradient>
		)
	}

	const renderNextButton = () => {
		return (
			<View style={styles.rightTextWrapper}>
				<Text style={styles.rightText}>Next</Text>
			</View>
		)
	}

	const renderPrevButton = () => {
		return (
			<View style={styles.leftTextWrapper}>
				<Text style={styles.leftText}>Prev</Text>
			</View>
		)
    }
    
    const handleDone = () => {
        props.handleDone()
    }

  	return (
		<View style={{flex: 1}}>
            <StatusBar translucent backgroundColor="transparent" />
            <AppIntroSlider
                keyExtractor={keyExtractor}
				renderItem={renderItem}
				renderDoneButton={renderDoneButton}
				renderNextButton={renderNextButton}
				renderPrevButton={renderPrevButton}
				showPrevButton
				dotStyle={styles.dotStyle}
				activeDotStyle={styles.activeDotStyle}
                data={data}
                onDone={handleDone}
            />
        </View>
  	)
}

const styles = StyleSheet.create({
	slide: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.white
	},
	image: {
		marginVertical: 60
	},
	title: {
		fontSize: 24,
		color: colors.black,
		textAlign: 'center',
		fontFamily: 'OpenSans-Bold',
		marginHorizontal: 60
	},
	text: {
		fontSize: 14,
		color: colors.gray,
		textAlign: 'center',
		fontFamily: 'OpenSans-SemiBold',
		marginHorizontal: 60,
		marginTop: 20
	},
	rightTextWrapper: {
		width: 40,
		height: 40,
		marginRight: 20,
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center'
	},
	rightText: {
		color: colors.blue,
		fontFamily: 'OpenSans-SemiBold',
		fontSize: 14
	},
	leftTextWrapper: {
		width: 40,
		height: 40,
		marginRight: 20,
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center'
	},
	leftText: {
		color: colors.blue,
		fontFamily: 'OpenSans-SemiBold',
		fontSize: 14
	},
	dotStyle: {
		backgroundColor: colors.blueFaded
	},
	activeDotStyle: {
		backgroundColor: colors.blue
    },
    doneButtonWrapper: {
        flex: 1,
        paddingLeft: 35,
        paddingRight: 50,
        borderRadius: 25,
        marginRight: -40
    },
    doneButtonText: {
        fontSize: 14,
        fontFamily: 'OpenSans-SemiBold',
        textAlign: 'center',
        margin: 10,
        color: colors.white,
        backgroundColor: 'transparent',
    },
})

export default Onboard
