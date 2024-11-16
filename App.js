import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  Modal,
  Button,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaCadastro from './TelaCadastro/TelaCadastro';
import MostrarDados from './TelaCadastro/MostrarDados';
import RecuperarSenha from './TelaCadastro/RecuperarSenha';
import Home from './Home/Home.js';
import Profile from './Profile/Profile.js';

const Stack = createNativeStackNavigator();

const MENSAGEM_EMAIL = 'Digite o seu e-mail.';
const MENSAGEM_SENHA = 'Digite a sua senha.';
const EMAIL = 'usuario@gmail.com';
const SENHA = 'senha';

function TelaLogin({ navigation }) {
  const [user, setUser] = useState('usuario@gmail.com');
  const [password, setPassword] = useState('');
  const [activity, setActivity] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const validarLogin = () => {
    if (user.trim().length === 0) {
      alert(MENSAGEM_EMAIL);
      return;
    }

    if (password.trim().length === 0) {
      alert(MENSAGEM_SENHA);
      return;
    }

    setActivity(true);
    setModalVisible(true);
    navigation.navigate('Home');
  };

  const fecharModal = () => {
    setActivity(false);
    setModalVisible(false);
  };

  const handleSocialLogin = (platform) => {
    alert(`Conta com ${platform} cadastrada com Sucesso.`);
  };

  return (

    <ImageBackground
      source={require('./assets/planoDeFundo.png')}
      style={Estilos.backgroundImage}>
      <View style={Estilos.container}>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={Estilos.centeredView}>
            <View style={Estilos.modalView}>
              <Text style={Estilos.modalText}>
                Login efetuado com sucesso!!!
              </Text>
              <View style={Estilos.button}>
                <Button onPress={() => fecharModal()} title="Fechar" />
              </View>
            </View>
          </View>
        </Modal>

        <Image
          style={Estilos.logo}
          source={require('./assets/logo-freedomDrive.png')}
          />
          
        <TextInput
          autoCorrect={false}
          placeholder={'E-mail:'}
          placeholderTextColor="grey"
          style={Estilos.textInput}
          clearButtonMode="always"
          onChangeText={(value) => setUser(value)}
          value={user}
        />
        <TextInput
          autoCorrect={false}
          placeholder={'Senha:'}
          placeholderTextColor="grey"
          secureTextEntry={true}
          style={Estilos.textInput}
          clearButtonMode="always"
          onChangeText={(value) => setPassword(value)}
        />
        <View>
          <Text
            onPress={() => navigation.navigate('RecuperarSenha')}
            style={{
              color: '#FC5100',
              fontFamily: 'Poppins',
              fontWeight: '700',
              marginHorizontal: 30,
              marginTop: 10,
              textDecorationLine: 'underline',
            }}>
            Esqueci minha senha
          </Text>
        </View>
        <View style={Estilos.button}>
          <Button
            onPress={() => validarLogin()}
            title="Entrar"
            color="#032548"
          />
        </View>
        <View>
          <Text
            onPress={() => navigation.navigate('TelaCadastro')}
            style={Estilos.textCadastro}>
            Ainda não tenho cadastro?
          </Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <ActivityIndicator size="large" animating={activity} />
        </View>
        <View style={Estilos.rowContainer}>
          <TouchableOpacity onPress={() => handleSocialLogin('Facebook')}>
            <Image
              style={Estilos.icones}
              source={require('./assets/icon_face.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSocialLogin('Google')}>
            <Image
              style={Estilos.icones}
              source={require('./assets/icon_google.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSocialLogin('Instagram')}>
            <Image
              style={Estilos.icones}
              source={require('./assets/icon_insta.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={TelaLogin} />
        <Stack.Screen name="TelaCadastro" component={TelaCadastro} />
        <Stack.Screen name="MostrarDados" component={MostrarDados} />
        <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  logo: {
    width: 200,
    height: 100,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  textInput: {
    backgroundColor: 'white',
    color: 'black',
    marginTop: 20,
    fontSize: 15,
    height: 40,
    width: 300,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    alignSelf: 'center',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
  },
  textCadastro: {
    color: '#022545',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 20,
    textDecorationLine: 'underline',
    marginTop: 20,
  },
  button: {
    backgroundColor: 'grey',
    fontSize: 15,
    width: 220,
    height: 35,
    marginTop: 20,
    marginHorizontal: 20,
    alignSelf: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    margin: 15,
  },
  icones: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
