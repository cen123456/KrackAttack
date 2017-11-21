import React, { Component } from 'react'
import {
  Image,
  ScrollView,
  Text,
  View,
  Alert,
  Button
} from 'react-native'
import { connect } from 'react-redux'
import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

class LaunchScreen extends Component {
  static navigationOptions = {
    header: null
  };

  render () {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.imageContainer}>
            <Image source={Images.krack} style={styles.image}
            />
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.title}>/krack-it</Text>
          </View>

        </ScrollView>

        <View style={styles.button}>
          <Button
            onPress={this.onPressAbout}
            title='About'
            color='#a67ae2'
            accessibilityLabel='Learn more about the application'
          />
        </View>

        <View style={styles.button}>
          <Button
            onPress={this.onPressDonate}
            title='Donate ;)'
            color='#a67ae2'
            accessibilityLabel='Help out with the Development of this application'
          />
        </View>
      </View>
    )
  }

  // Change this to a modal maybe?
  onPressAbout () {
    Alert.alert('About', 'This is a pretty cool app fam. wat dat wifi do')
  }

  // Change this to a modal maybe?
  onPressDonate () {
    Alert.alert('Donation', 'Thanks for showing your support to raise awareness about Krack Attacks', [{text: 'Send bitcoin to 1LegaJgwBryjnfJXTQ7cm71QENEr9A9xou'}])
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen)