import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
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
