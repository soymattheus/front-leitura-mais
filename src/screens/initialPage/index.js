import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const img = require('../../assets/logo.png')
const Styles = require('../../global/style.json')

export default function InitialPage({navigation,route}) {

  return (
    <View style={Styles.container}>
      <Image
        source={img}
        style={{width: 282, height: 250}}
      />
      <Text
        style={{
          fontSize: 32,
          color: Styles.colors.ligthTheme.primary,
          fontWeight: "bold",
          marginBottom: 30
        }}
      >
        Leitura+
      </Text>

      <Text
        style={{
          fontSize: 18,
          color: Styles.colors.ligthTheme.contorno,
          fontWeight: "bold"
        }}
      >
        Aprender a ler
      </Text>
      <Text
        style={{
          fontSize: 18,
          color: Styles.colors.ligthTheme.contorno,
          fontWeight: "bold",
          marginBottom: 30
        }}
      >
        para ler e aprender
      </Text>

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

      <TouchableOpacity
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
          CADASTRAR-SE
        </Text>
      </TouchableOpacity>

      <View style={{flexDirection: 'row', alignItems: 'center', width: 295, marginTop: 25, marginBottom: 25}}>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        <View>
          <Text style={{width: 50, textAlign: 'center'}}>ou</Text>
        </View>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
      </View>

      <TouchableOpacity>
        <Text
          style={{
            fontSize: 13,
            color: Styles.colors.ligthTheme.orange,
            fontWeight: Styles.font.fontWeight.semiBold
          }}
        >Entrar como visitante</Text>
      </TouchableOpacity>
    </View>

  );
}