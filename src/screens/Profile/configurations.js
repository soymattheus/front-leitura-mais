import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function ProfileConfigurations() {
    return (
      <View style={styles.container}>
        <Text>Configurações</Text>
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