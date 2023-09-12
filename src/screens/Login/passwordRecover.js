import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import BigButton from '../../components/buttons/BigButton';
import Input from '../../components/inputs/Input';
import TitleSubtitle from '../../components/texts/titleSubtitle';

const Styles = require('../../global/style.json')

import { useAuth } from '../../hooks/auth';

export default function PasswordRecover({navigation,route}) {

  const { token, setToken, loged, setLoged } = useAuth()
  const [email, setEmail] = React.useState('')

  return (
    <View style={Styles.container}>
      <TitleSubtitle/>

      <Text
        style={{
          fontSize: 24,
          color: Styles.colors.ligthTheme.primary,
          fontWeight: "bold",
          marginBottom: 30,
        }}
      >
        Esqueceu sua senha?
      </Text>

      <Input
        title='E-mail'
        placeholder='E-mail'
        value={email}
        onChangeText={(e) => setEmail(e)}
      />

      <BigButton
        text='ENVIAR'
        width={226}
        marginTop={35}
        marginBottom={45}
        onPress={() => {
          navigation.replace('Login')
        }}
      />

      <View style={{
        flexDirection: 'row', 
        alignItems: 'center', 
        width: 295, 
        marginTop: 100,
        marginBottom: 15,
        justifyContent: 'center'
      }}>
        <View>
          <Text>Você não tem conta?</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.replace('SignInAccountData')
            }}
          >
            <Text
              style={{
                fontSize: 13,
                color: Styles.colors.ligthTheme.orange,
                fontWeight: Styles.font.fontWeight.semiBold
              }}
            > Criar conta</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>

  );
}