import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function AfterLoginPage() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo à sua página principal!</Text>
            <Text style={styles.subtitle}>Você está logado com sucesso.</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('index')}>
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 40,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#880000',
        borderRadius: 50,
        paddingVertical: 12,
        paddingHorizontal: 40,
        marginBottom: 20,
    },
    buttonText: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold',
    },
});
