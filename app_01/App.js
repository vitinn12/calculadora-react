import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Calculadora from './comps/Calculadora';
import CalculadoraCientifica from './comps/Calculadoracientifica';

function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.botoes}>
          <Text style={styles.botao} onPress={() => navigation.navigate('Calculadora')}>Calculadora</Text>
          <Text style={styles.botao} onPress={() => navigation.navigate('Calculadora Cientifica')}>Calculadora Cientifica</Text>
        </View>
      </View>

    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Calculadora" component={Calculadora} />
        <Drawer.Screen name="Calculadora Cientifica" component={CalculadoraCientifica} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    display: 'flex',
    gap: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    height: '200px',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  botoes: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botao: {
    padding: 25,
    backgroundColor: 'black',
    color: 'white',
    borderRadius: 5,
    fontSize: 18,
    fontWeight: 'bold',
  },
});