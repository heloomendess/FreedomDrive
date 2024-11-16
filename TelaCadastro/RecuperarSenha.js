import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  SafeAreaView,
  ScrollView,
  ImageBackground,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MostrarDados from '../TelaCadastro/MostrarDados';

const RecuperarSenha = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [erros, setErros] = useState({
    nome: '',
  });

  const validarCampos = () => {
    let errosTemp = {};

    if (!nome) {
      errosTemp.nome = 'Digite seu E-mail';
    }

    setErros(errosTemp);

    return Object.keys(errosTemp).length === 0;
  };

  const handleEnviar = () => {
   
    if (validarCampos()) {
      alert('Link de recuperação foi enviado para o E-mail.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/planoDeFundo.png')}
        style={styles.backgroundImage}>
        <ScrollView>
          <View style={styles.formContainer}>
            {erros.nome !== '' ? (
              <Text style={styles.erro}>{erros.nome}</Text>
            ) : (
              <Text></Text>
            )}
            <Text style={styles.texto}>Digite o E-mail de usuario:</Text>
            <TextInput
              style={styles.input}
              value={nome}
              onChangeText={setNome}
              placeholder="Digite seu E-mail"
              maxLength={100}
            />
            <Button
              onPress={handleEnviar}
              title="Enviar"
              color="#032548"
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  formContainer: {
    flex: 1,
    padding: 20,
    paddingTop: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    color: '#000',
  },
  erro: {
    color: 'red',
    marginBottom: 5,
  },
  texto: {
    color: '#022545',
    fontFamily: 'Poppins',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 1.5,
    padding: 15,
    paddingLeft: 1,
  },
});

export default RecuperarSenha;
