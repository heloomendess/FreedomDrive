import { Text, SafeAreaView, StyleSheet, View, ScrollView, Button } from 'react-native';
import CarCard from '../components/Carcap.js'; 
import SearchBar from '../components/SearchBar.js'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Criação do stack
const Stack = createNativeStackNavigator();

// You can import supported modules from npm
import { Card } from 'react-native-paper';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
     <SafeAreaView >
      <ScrollView >
        <SearchBar />
        <Text style={styles.titulo2}>Recomendamos para você:</Text>
        <View style={styles.container}>
          <CarCard style={styles.flexContainer} />
          <CarCard style={styles.flexContainer} />
          <CarCard style={styles.flexContainer} />
          <CarCard style={styles.flexContainer} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default function Home() {
  return (
   
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  flexContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
  titulo2: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 22,
    fontWeight: 700,
  }
});