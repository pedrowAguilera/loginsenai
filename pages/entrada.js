import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function Acesso() {

    const navigation = useNavigation();

    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.container}>

                    <Animatable.View animation="fadeInDown" delay={500} style={styles.containerHeader}>
                        <Text style={styles.message}>Bem-vindo(a)</Text>
                    </Animatable.View>
                    <Animatable.View animation="fadeInUp" style={styles.containerForm}>

                        <Text style={styles.title}>
                            E-mail
                        </Text>
                        <TextInput
                            placeholder='Digite um email...'
                            style={styles.input}
                        />
                        <TextInput
                            placeholder='Sua senha'
                            style={styles.input}
                        />
                        <TouchableOpacity 
                            style={styles.button} 
                            onPress={()=> navigation.navigate('pagina')}>
                            <Text style={styles.buttonText}>
                                Acessar
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonRegister}>
                            <Text style={styles.registerText}>
                                Não possui uma conta? Cadastre-se
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('index')}
                            style={styles.button1}>
                            <Text style={styles.buttonText1}>
                                Voltar
                            </Text>
                        </TouchableOpacity>
                    </Animatable.View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#880000'
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: "#FFF"
    },
    containerForm: {
        backgroundColor: "#FFF",
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: "5%",
        paddingEnd: "5%"
    },
    title: {
        fontSize: 20,
        marginTop: 28,
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16
    },
    button: {
        backgroundColor: '#880000',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center'
    },
    registerText: {
        color: '#a1a1a1'
    },
    button1: {
        backgroundColor: '#000',
        width: '40%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText1: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: 'bold'
    }
})