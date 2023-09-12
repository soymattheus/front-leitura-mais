import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BigButton from '../../components/buttons/BigButton';
import Input from '../../components/inputs/Input';

const Styles = require('../../global/style.json')

import { useAuth } from '../../hooks/auth';
import TitleSubtitle from '../../components/texts/titleSubtitle';

export default function SignInUserData({navigation,route}) {

  const { token, setToken, loged, setLoged } = useAuth()

  const [showPassword, setShowPassword] = React.useState(false)
  const [eyeIcon, setEyeIcon] = React.useState("eye-outline")
  const [userName, setUserName] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleShowPassword = () => {
    setShowPassword(!showPassword)

    if (!showPassword) {
      setEyeIcon("eye-outline")
    } else {
      setEyeIcon("eye-off-outline")
    }
  }

  return (
    <SafeAreaView style={Styles.container}>
      <TitleSubtitle/>

      <View style={{
        flexDirection: 'row', 
        alignItems: 'center', 
        width: 295, 
        marginTop: 15, 
        marginBottom: 5
        }}
      >

        <View>
          <Text
            style={{
              width: 20, 
              textAlign: 'center',
              marginRight: 3, 
              marginLeft: 3,
              fontWeight: Styles.font.fontWeight.bold,
              fontSize: 12,
              color: '#000',
              }}
          >
            1
          </Text>
        </View>

        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />

        <View
          style={{
            width: 20,
            height: 20,
            borderColor: Styles.colors.ligthTheme.contorno, 
            borderWidth: 1, 
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: Styles.colors.ligthTheme.button,
            marginRight: 3, 
              marginLeft: 3,
          }}
        >
          <Text 
            style={{
              fontWeight: Styles.font.fontWeight.bold,
              fontSize: 12,
              color: '#fff',
              }}
          >
            2
          </Text>
        </View>
        
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />

        <View>
          <Text
            style={{
              width: 20, 
              textAlign: 'center',
              marginRight: 3, 
              marginLeft: 3,
              fontWeight: Styles.font.fontWeight.bold,
              fontSize: 12,
              color: '#000',
              }}
          >
            3
          </Text>
        </View>

      </View>

      <View style={{
        flexDirection: 'row', 
        alignItems: 'center', 
        width: 295,
        marginBottom: 5,
        }}
      >
        <View>
          <Text style={{width: 295, textAlign: 'left'}}>Dados do usuário</Text>
        </View>
      </View>

      <Input
        title='Nome'
        placeholder='Nome'
        value={userName}
        onChangeText={(e) => setUserName(e)}
      />

      <Input
        title='Sobrenome'
        placeholder='Sobrenome'
        value={userName}
        onChangeText={(e) => setUserName(e)}
      />

      <Input
        title='Sexo'
        placeholder='Sexo'
        value={password}
        onChangeText={(e) => setPassword(e)}
      />

      <Input
        title='Data de Nascimento'
        placeholder='Data de Nascimento'
        value={password}
        onChangeText={(e) => setPassword(e)}
      />

      <View style={{
        flexDirection: 'row', 
        justifyContent: 'space-between',
        width: 295,
        marginBottom: 5,
        }}
      >
        <BigButton
          text='VOLTAR'
          width={141}
          marginTop={25}
          marginBottom={25}
          onPress={() => {
            navigation.navigate('SignInAccountData')
          }}
        />

          <BigButton
          text='AVANÇAR'
          width={141}
          marginTop={25}
          marginBottom={25}
          onPress={() => {
            navigation.navigate('AdditionalData')
          }}
        />
      </View>
    </SafeAreaView>

  );
}