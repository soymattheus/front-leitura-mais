import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import MyTabs from '../../navigation/tab.routes'

export default function BooksHome({navigation,route}) {
    return (
      <View style={styles.container}>
        <Text>Livros</Text>
  
        <TouchableOpacity onPress={() => navigation.navigate('BooksList')}>
          <Text>ENTRAR</Text>
        </TouchableOpacity>
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