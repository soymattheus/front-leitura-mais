import { Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Styles from '../../global/style.json'

export default function BooksHome({navigation,route}) {
  return (
    <SafeAreaView style={Styles.container}>
      <Text>Livros</Text>

      <TouchableOpacity onPress={() => navigation.navigate('BooksList')}>
        <Text>VER TODOS</Text>
      </TouchableOpacity>
    </SafeAreaView>

  );
}