import React, {Component} from 'react';
import {StyleSheet, Text, ImageBackground, Button, TextInput, View} from 'react-native';
import { NavigationScreenProp } from 'react-navigation'
// import {withTranslation, IWithTranslationProps} from "../Services/Translate/WithTranslate";
import { IWithTranslationProps, withTranslation } from '../Services/Translate/WithTranslate'
interface AuthState {
    username: string,
    password: string
}
interface AuthProps {
    navigation: NavigationScreenProp<any, any>
    lang: IWithTranslationProps
}


@withTranslation()
export default class AuthComponent extends Component<AuthProps, AuthState>{
    constructor(props : AuthProps) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }
    }
    onButtonPressed = () => {
        this.checkIfUserExists()
    }

    checkIfUserExists = () => {
        fetch('http://testsowa.pswbp.pl/capi.php', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "auth": [
                    1,
                    "urn:uuid:4dd12e7a-7572-4829-b0fe-e13fef752fda",
                    "#iqvbW!JhHch+TW._(+z",
                    "42699@lic528.sowa"
                ],
                "exec": [
                    ["AccountCheck", [this.state.username]]
                ]
            }),
        })
        .then((response) => {
            if(!response.ok)
                throw new Error('Network response was not ok.')

            return response.json()
        })
        .then((responseJson) => {
            if (responseJson[0].status === 200)
                this.loginUser()
            else
                alert('Zly login lub hasło')
        })
        .catch((error) => {
            console.log(error)
        })
    }

    loginUser = () => {
        fetch('http://testsowa.pswbp.pl/capi.php', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "auth": [
                    1,
                    "urn:uuid:4dd12e7a-7572-4829-b0fe-e13fef752fda",
                    "#iqvbW!JhHch+TW._(+z",
                    "42699@lic528.sowa"
                ],
                "exec": [
                    ["AccountAuth", [this.state.username, this.state.password]]
                ]
            }),
        })
        .then((response) => {
            if(!response.ok)
                throw new Error('Network response was not ok.')

            return response.json()
        })
        .then((responseJson) => {
            if (responseJson[0].status === 200) {
                this.props.navigation.navigate('Second')
            }
            else
                alert('Zły login lub hasło')
        })
        .catch((error) => {
            console.log(error)
        })
    }

    render() {
        return (
            <ImageBackground style={styles.background} source={require('../assets/images/psw-bg.jpg')}>
                <View style={styles.container}>
                    <View style={styles.textContainer}>
                        <Text style={[styles.textStyle, styles.textCenter, styles.textBold]}>Zaloguj się</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput onChangeText={(username) => this.setState({username})} style={styles.input} placeholder='Adres Email'/>
                        <TextInput secureTextEntry={true} onChangeText={(password) => this.setState({password})} style={styles.input} placeholder='Hasło'/>
                        <View style={styles.buttonStyle}>
                            <Button color={'#fff'} title={'Zaloguj'} onPress={this.onButtonPressed}></Button>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        width: '80%',
        maxHeight: 230,
        borderWidth: 1,
        borderColor: '#36a0ec',
        borderRadius: 5,
        backgroundColor: '#fff'
    },
    inputContainer: {
        width: '100%',
        paddingTop: 40,
        paddingBottom: 10,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        borderRadius: 5
    },
    input: {
        minHeight: 20,
        borderColor: '#000',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 5,
        width: '100%',
        paddingLeft: 5,
        paddingVertical: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
    },
    background: {
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textContainer: {
        paddingHorizontal: 20,
        paddingBottom: 10,
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#36a0ec'

    },
    textStyle: {
        color: '#36a0ec',
        fontSize: 18
    },
    textBold: {
        fontWeight: 'bold'
    },
    textCenter: {
        textAlign: 'center'
    },
    buttonStyle: {
        marginTop: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        backgroundColor: '#36a0ec'
    }
});
