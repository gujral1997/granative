import React from 'react'
import {View, StyleSheet, TextInput, TouchableOpacity, Text, ActivityIndicator, ImageBackground} from 'react-native'
import {Actions, ActionConst} from  'react-native-router-flux'

import assets from '../../themes/assets'

class LoginScreen extends React.Component {

    state= {
        email: '',
        password: ''
    }

    render() {
        return (
            <ImageBackground style={styles.container} source={assets['background']}>
                <View style={styles.subView}>
                <TextInput
                    style={styles.input}
                    onChangeText={(email) => this.setState({email})}
                    value={this.state.email}
                    placeholder='Email'
                    placeholderTextColor='black'
                    autoCapitalize = 'none'
                    />
                <TextInput
                    style={styles.input}
                    onChangeText={(name) => this.setState({name})}
                    value={this.state.name}
                    placeholder='Password'
                    placeholderTextColor='black'
                    secureTextEntry
                    />
                    <TouchableOpacity 
                        // onPress={()=>Actions.homeScreen({type: ActionConst.RESET})}
                        style={styles.button}
                        >
                        {this.state.loading?<ActivityIndicator color="white"/>:<Text style={styles.text}>Submit</Text>}
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
} 

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%'
    },
    subView: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '70%'
    },
    input: {
        width: '100%',
        padding: 10,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 8,
        borderRadius: 4,
        backgroundColor: 'white',
        opacity: 0.5
    },
    button: {
        paddingTop: 12,
        paddingBottom: 12,
        borderRadius: 5,
        backgroundColor: '#4bb543',
        width: '100%',
        alignItems: 'center'
    },
    text: {
        color: 'white'
    },
})

export default LoginScreen
