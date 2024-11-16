import { Text, SafeAreaView, StyleSheet, View, Image, ScrollView, Pressable } from 'react-native';
import ImagemDados from '../assets/icon_google.png';
import { SlArrowRight } from "react-icons/sl";
import {Input, Icon} from '@rneui/themed';




export default function Profile() {
  const handlePress = () => {
    alert('Você pressionou o botão!');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileInfo}>
          <View style={styles.imageContainer}>
            <Image source={require('../assets/icon_face.png')} style={styles.imagemLogo} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.tituloProfile}>Sebastian Stefan</Text>
            <Text style={styles.infoText}>26 anos, São Paulo - Brasil</Text>
            <Text style={styles.infoText}>Pontos: 20.000</Text>
          </View>
      </View>
      <View style={styles.containerProfile}>
        <Pressable style={styles.containerItem}>
          <Image source={require('../assets/icon_face.png')} style={styles.imagemConfig} />
          <Text style={styles.tituloConfig}>Dados Pessoais</Text>
        </Pressable>
        <Pressable style={styles.containerItem}>
          <Image source={require('../assets/icon_face.png')} style={styles.imagemConfig} />
          <Text style={styles.tituloConfig}>CNH</Text>
        </Pressable>
        <Pressable style={styles.containerItem}>
          <Image source={require('../assets/icon_face.png')} style={styles.imagemConfig} />
          <Text style={styles.tituloConfig}>Histórico de Carro</Text>
        </Pressable>
        <Pressable style={styles.containerItem}>
          <Image source={require('../assets/icon_face.png')} style={styles.imagemConfig} />
          <Text style={styles.tituloConfig}>Pagamentos</Text>
        </Pressable>
        <Pressable style={styles.containerItem}>
          <Image source={require('../assets/icon_face.png')} style={styles.imagemConfig} />
          <Text style={styles.tituloConfig}>Suporte</Text>
        </Pressable>
        <Pressable style={styles.containerItem} onPress={handlePress}>
          <Image source={require('../assets/icon_face.png')} style={styles.imagemConfig} />
          <Text style={styles.tituloConfig}>Configurações</Text>
        </Pressable>
      </View>

      <View>
        <View style={styles.infoApp}>
          <Text style={{ color: '#495057', fontWeight: 500, textTransform: 'uppercase'}}>Version 4.2.0</Text>
          <Text style={{ color: '#FC5100', fontWeight: 800, textDecorationLine: 'underline'}}>Sair</Text>
        </View>
        <View style={styles.nav}>
          <Image source={require('../assets/icon_face.png')} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center', 
    backgroundColor: '#ecf0f1',
    padding: 8,
    gap: 300,
  },
  nav: {
    flex: 1,
    height: 100,
    backgroundColor: '#022545',
  },
  infoApp: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 30,
  },
  containerProfile: {
    padding: 30,
  },
  containerItem:{
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000', 
  },  
  profileInfo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor: '#ecf0f1',
    padding: 1,
    flexDirection: 'row',
    gap: 30,
  },
  imagemLogo: {
    width: 100,
    height: 100,
  },
  imageContainer: {
    marginBottom: 20, 
  },
  imagemConfig: {
    width: 30,
    height: 30,
  },
  textContainer: {
    alignItems: 'left',
    justifyContent: 'center',
  },
  tituloProfile: {
    fontSize: 24,
    color: '#022545',
    fontWeight: 'bold', 
  },
  tituloConfig: {
    fontSize: 16,
    fontWeight: 500,
  },
  infoText: {
    fontSize: 14,
    color: '#022545',
    fontWeight: 400,
    textTransform: 'uppercase',
  },
});
