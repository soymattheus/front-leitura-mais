import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Styles = require('../../global/style.json')

export default function Button() {
    return (
        <TouchableOpacity
        onPress={() => navigation.navigate('Tabg')}
        style={{
          height:50, 
          width: 295,
          backgroundColor: Styles.colors.ligthTheme.button,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
          marginTop: 10,
          marginBottom: 15
        }}  
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 20,
            fontWeight: Styles.font.fontWeight.semiBold
          }}
        >
          ENTRAR
        </Text>
      </TouchableOpacity>
    )
}