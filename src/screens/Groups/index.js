import { Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Styles from '../../global/style.json'

export default function Groups() {
  return (
    <SafeAreaView style={Styles.container}>
      <Text>Grupos</Text>
    </SafeAreaView>

  );
}