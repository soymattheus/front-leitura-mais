import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Styles from '../../global/style.json'

export default function Search() {
  return (
    <SafeAreaView style={Styles.container}>
      <Text>BUSCA</Text>
    </SafeAreaView>

  );
}