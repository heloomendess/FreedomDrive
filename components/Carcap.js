import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';


export default function Carcap() {
  return (
    <View style={styles.container}>
        <View style={styles.backgroundShape}></View>
          <Svg
          height="100%"
          width="100%"
          style={styles.backgroundShape}
          viewBox="50 0 550 220">

          <Path
            d="M100.457 36.0002C207.957 50.5 240.746 -33.4705 298.957 16.0003C340.168 51.023 348.576 116.824 325.866 157.902C309.759 187.035 236.107 149.547 198.257 157.902C114.354 176.422 55.6454 204.316 10.2253 161.15C-27.8026 125.009 48.7475 29.0255 100.457 36.0002Z"
            transform="scale(-1, 1) translate(-400, 0)"
            fill="#0D3A65"/>
        </Svg>
        <Image
          source={{ uri: 'https://www.localiza.com/brasil-site/geral/Frota/ARGO.png' }} style={styles.carImage}
        />
        <Text style={styles.h3}>Fiat Argo 1.0 - 2024</Text>
        <Text style={styles.supportText}>Suporte: DV, DA, DF, DI</Text>
        <Button style={styles.btnReserva} backgroundColor='#FC5100' title="Reservar agora" color="#FF6F00" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 35,
    position: 'relative',
    width: 187,
    height: 209,
  },
  backgroundShape: {
    position: 'absolute',
    top: 0,
    left: 50,
    zIndex: 1,
  },
  carImage: {
    width: 144,
    height: 80,
    marginTop: 50, 
    zIndex: 1,
  },
  supportText: {
    marginTop: 10,
    fontSize: 14,
    color: '#333333',
  },
  btnReserva: {
    width: 30,
    color: '#000000',
    backgroundColor: '#FC5100',
    fontSize: 30,
  },
    h3: {
    paddingTop: 8,
    fontSize: 18,
    fontWeight: 600,
    color: '#022545',
  },
});
