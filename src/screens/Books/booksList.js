import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import MyTabs from '../../navigation/tab.routes'

export default function BooksList() {
    return (
      <View style={styles.container}>
        <Text>Lista de Livros</Text>
  
        <TouchableOpacity>
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