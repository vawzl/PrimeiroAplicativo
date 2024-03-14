import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Title from './Title/';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Deyvid</Text>
      <Text>07/03/2024</Text>
      <Title/>
      <Button title='Picora'></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
