import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function ProfileMain({navigation,route}) {
    return (
      <View style={styles.container}>
      <View>
        <Text>Perfil</Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('ProfileConfiguration')}>
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