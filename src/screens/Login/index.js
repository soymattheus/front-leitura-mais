import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BigButton from '../../components/buttons/BigButton';
import Input from '../../components/inputs/Input';

const DiscordImg = require('../../assets/discord.png')
const FacebookImg = require('../../assets/facebook.png')
const GoogleImg = require('../../assets/google.png')

const Styles = require('../../global/style.json')

import { useAuth } from '../../hooks/auth';
import TitleSubtitle from '../../components/texts/titleSubtitle';

export default function Login({navigation,route}) {

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

      <Text
        style={{
          fontSize: 32,
          color: Styles.colors.ligthTheme.primary,
          fontWeight: "bold",
          marginBottom: 30,
        }}
      >
        Bem-vindo(a) de volta
      </Text>

      <Input
        title='Usuário'
        placeholder='Usuário'
        value={userName}
        onChangeText={(e) => setUserName(e)}
      />

      <Input
        title='Senha'
        placeholder='Senha'
        showIcon={true}
        onIconPress={handleShowPassword}
        icon={eyeIcon}
        secureTextEntry={!showPassword}
        value={password}
        onChangeText={(e) => setPassword(e)}
      />

      <BigButton
        text='ENTRAR'
        //onPress={() => navigation.navigate('Tab')}
        width={226}
        marginTop={25}
        marginBottom={25}
        onPress={() => {
          setLoged(true)
          // navigation.replace('Loged')
        }}
      />


      <View style={{
        flexDirection: 'row', 
        width: 295,
        justifyContent: 'flex-end'
      }}>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.replace('PasswordRecover')
            }}
          >
            <Text
              style={{
                fontSize: 13,
                fontWeight: Styles.font.fontWeight.semiBold
              }}
            >
              Esqueceu a senha?
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center', width: 295, marginTop: 15, marginBottom: 15}}>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        <View>
          <Text style={{width: 50, textAlign: 'center'}}>ou</Text>
        </View>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
      </View>

      <View style={{
        flexDirection: 'row', 
        alignItems: 'center', 
        width: 295, 
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

      <View style={{
        flexDirection: 'row', 
        alignItems: 'center', 
        width: 196,
        justifyContent: 'space-between'
      }}>
        <Image
          source={FacebookImg}
          style={{width: 40, height: 40}}
        />

        <Image
          source={DiscordImg}
          style={{width: 40, height: 40}}
        />

        <Image
          source={GoogleImg}
          style={{width: 40, height: 40}}
        />
      </View>
    </SafeAreaView>

  );
}