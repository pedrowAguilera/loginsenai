import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';
import { useState } from 'react';
import bancoSenhas from '../hooks/bancoSenhas';

export default function Acesso({ navigation }) {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  

  const handleLogin = () => {

    const usuario = bancoSenhas.find(user => user.email === email && user.senha === senha);

    if (usuario ) {
      navigation.navigate('pagina');
    } else {
      Alert.alert('Login Inválido');
    }  }

  const toggleSenhaVisivel = () => {
    setSenhaVisivel(!senhaVisivel);
  }

  
  
  return (

    <KeyboardAvoidingView style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
            <Text style={styles.message}>Bem-vindo(a)</Text>
          </Animatable.View>
          <Animatable.View animation="fadeInUp" style={styles.containerForm}>
            <Text style={styles.title}>
              E-mail
            </Text>
            <TextInput
              placeholder='Digite seu email...'
              style={styles.input}
              onChangeText={text => setEmail(text)}
              value={email}
              autoCapitalize="none"
            />
            <Text style={styles.title}>
              Senha
            </Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.input}
                placeholder="Senha"
                onChangeText={text => setSenha(text)}
                value={senha}
                secureTextEntry={!senhaVisivel}
              />
              <TouchableOpacity onPress={toggleSenhaVisivel}>
                <Text style={styles.toggleButtonText}>{senhaVisivel ? 'Ocultar' : 'Mostrar'}</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={(handleLogin)} style={styles.button}>
              <Text style={styles.buttonText}>
                Acessar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('cadastro')} style={styles.buttonRegister}>
              <Text style={styles.registerText}>
                Não possui uma conta? Cadastre-se
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('index')} style={styles.returnButton}>
              <Text style={styles.returnButtonText}>Voltar à tela inicial</Text>
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
    fontSize: 16,
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
  returnButton: {
    marginTop: 20,
    backgroundColor: '#880000',
    borderRadius: 4,
    padding: 10,
    alignSelf: 'center'
  },
  returnButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  }
})