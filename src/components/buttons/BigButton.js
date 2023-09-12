import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Styles = require('../../global/style.json')

export default function BigButton({
    height = 50, 
    width = 295,
    backgroundColor = Styles.colors.ligthTheme.button,
    borderRadius = 10,
    marginTop = 10,
    marginBottom = 15,
    color = "#fff",
    fontSize = 20,
    fontWeight = Styles.font.fontWeight.semiBold,
    onPress = () => {alert('Clicou!')},
    text = 'TEXTO'
  }) {
    return (
        <TouchableOpacity
        onPress={onPress}
        style={{
          height:height, 
          width: width,
          backgroundColor: backgroundColor,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: borderRadius,
          marginTop: marginTop,
          marginBottom: marginBottom
        }}  
      >
        <Text
          style={{
            color: color,
            fontSize: fontSize,
            fontWeight: fontWeight
          }}
        >
          {text}
        </Text>
      </TouchableOpacity>
    )
}