import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Styles from '../../global/style.json'

export default function BooksList() {
  return (
    <View style={Styles.container}>
      <Text>Lista de Livros</Text>
    </View>

  );
}