import React, {Component} from 'react';
import {StyleSheet, Text, Button, TextInput, View, FlatList, ScrollViewComponent, Image} from 'react-native';
import {sendRequest} from "../../Services/Redux/endpointConnection";

export default class Profile extends Component {



    componentWillMount(): void {
        testFunc();
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.nameEnlarge}>Nazwisko Imie</Text>
                <Text>Adres,Data Urodzenia</Text>
                <Text>Tryb studiow, kierunek</Text>
                <Text>Ulica, kod pocztowy miasto</Text>
                <Text >email,email,...</Text>
                <Text >Telefon</Text>
                <Text>Konto wazne do : data</Text>

            </View>
        )
    }
}

export async function testFunc(){
    let exec =[
        "RegistrationInfo"
    ]
    let response = await sendRequest(exec);
    console.log(response);
}


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'flex-start',
        borderWidth: 1,
        borderColor: '#000',
        borderStyle: 'solid',
        minHeight: 100
    },
    nameEnlarge :{
        color : 'blue',
        fontSize : 16
    }
});