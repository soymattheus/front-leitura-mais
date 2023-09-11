import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Groups() {
    return (
      <View style={styles.container}>
        <Text>Grupos</Text>
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