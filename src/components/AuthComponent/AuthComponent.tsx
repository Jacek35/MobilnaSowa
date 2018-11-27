import React, {Component} from 'react';
import {StyleSheet, Text, ImageBackground, Button, TextInput, View} from 'react-native';
import { NavigationScreenProp } from 'react-navigation'
import { styles }  from './styles'
// import {withTranslation, IWithTranslationProps} from "../Services/Translate/WithTranslate";
import withTranslation, {IWithTranslationProps} from '../../Services/Translate/WithTranslate'
import {Dispatch} from "redux";
import * as actions from "./actions";
import {connect} from "react-redux";



interface AuthState {
    username: string,
    password: string,
    json: any
}

interface AuthProps extends IWithTranslationProps{
    navigation: NavigationScreenProp<any, any>,
    authenticate: (p: string, s: string) => void
    isLogged : boolean
}

@withTranslation()
export class AuthComponent extends React.Component<AuthProps, AuthState>{
    constructor(props : AuthProps) {
        super(props)

        this.state = {
            username: 'testsowa@pswbp.pl',
            password: 'Test.Sowa.1',
            json: {}
        }
    }
    // onButtonPressed = () => {
    //     this.checkIfUserExists()
    // }
    //
    // checkIfUserExists = () => {
    //     fetch('http://testsowa.pswbp.pl/capi.php', {
    //         method: 'POST',
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             "auth": [
    //                 1,
    //                 "urn:uuid:4dd12e7a-7572-4829-b0fe-e13fef752fda",
    //                 "#iqvbW!JhHch+TW._(+z",
    //                 "42699@lic528.sowa"
    //             ],
    //             "exec": [
    //                 ["AccountCheck", [this.state.username]]
    //             ]
    //         }),
    //     })
    //     .then((response) => {
    //         if(!response.ok)
    //             throw new Error('Network response was not ok.')
    //
    //         return response.json()
    //     })
    //     .then((responseJson) => {
    //         if (responseJson[0].status === 200)
    //             this.loginUser()
    //         else
    //             alert('Zly login lub hasło')
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //     })
    // }

    // loginUser = () => {
    //     fetch('http://testsowa.pswbp.pl/capi.php', {
    //         method: 'POST',
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             "auth": [
    //                 1,
    //                 "urn:uuid:4dd12e7a-7572-4829-b0fe-e13fef752fda",
    //                 "#iqvbW!JhHch+TW._(+z",
    //                 "42699@lic528.sowa"
    //             ],
    //             "exec": [
    //                 ["AccountAuth", [this.state.username, this.state.password]]
    //             ]
    //         }),
    //     })
    //     .then((response) => {
    //         if(!response.ok)
    //             throw new Error('Network response was not ok.')
    //
    //         return response.json()
    //     })
    //     .then((responseJson) => {
    //         if (responseJson[0].status === 200) {
    //             this.setState({json: responseJson})
    //             console.log(responseJson)
    //             this.props.navigation.navigate('Second', {json: this.state.json[0].data.name})
    //         }
    //         else
    //             alert('Zły login lub hasło')
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //     })
    // }



    render() {
        let { lang, isLogged, authenticate } = this.props

        if(isLogged){
            this.props.navigation.navigate('Second')
            return <></>
        } else {
            return (
                <ImageBackground style={styles.background} source={require('../../assets/images/psw-bg.jpg')}>
                    <View style={styles.container}>
                        <View style={styles.textContainer}>
                            <Text style={[styles.textStyle, styles.textCenter, styles.textBold]}>{lang.zaloguj}</Text>
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput onChangeText={(username) => this.setState({username})}  value={this.state.username} style={styles.input} placeholder={lang.email}/>
                            <TextInput secureTextEntry={true} onChangeText={(password) => this.setState({password})} value={this.state.password} style={styles.input} placeholder={lang.haslo}/>
                            <View style={styles.buttonStyle}>
                                <Button color={'#fff'} title={lang.login} onPress={() => { authenticate(this.state.username, this.state.password) }}></Button>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            )
        }

    }
}

function mapStateToProps({session} : any, ownProps: any){
    return {
        isLogged : session.isLogged
    }
}

function mapDispatchToProps(dispatch : Dispatch<actions.SessionAction>){
    return {
        authenticate: (p: string, s: string) => dispatch(actions.Auth(p, s))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AuthComponent)
