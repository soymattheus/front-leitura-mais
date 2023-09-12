import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'

import Styles from '../../global/style.json'

import { useAuth } from '../../hooks/auth';

export default function ProfileMain({navigation,route}) {
  const { setLoged } = useAuth()

    return (
      <SafeAreaView style={Styles.container}>
        <ScrollView
          style={{ width: '90%' }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: 50
            }}
          >
            <Text
              style={{...Styles.text.subtitle, color: Styles.colors.ligthTheme.primary}}
            >
              Matheus Tavares
            </Text>

            <TouchableOpacity onPress={() => navigation.navigate('ProfileConfiguration')}>
              <Feather name='settings' size={30} color={Styles.colors.ligthTheme.blue}/>
            </TouchableOpacity>

          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: 65
            }}
          >
            <MaterialCommunityIcons name='account-circle-outline' size={60}/>

            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: Styles.font.fontWeight.semiBold,
                  color: Styles.colors.ligthTheme.blue
                }}
              >
                10
              </Text>
              
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: Styles.font.fontWeight.semiBold,
                  color: Styles.colors.ligthTheme.blue
                }}
              >
                Livros
              </Text>
            </View>

            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: Styles.font.fontWeight.semiBold,
                  color: Styles.colors.ligthTheme.blue
                }}
              >
                23
              </Text>
              
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: Styles.font.fontWeight.semiBold,
                  color: Styles.colors.ligthTheme.blue
                }}
              >
                Seguidores
              </Text>
            </View>

            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: Styles.font.fontWeight.semiBold,
                  color: Styles.colors.ligthTheme.blue
                }}
              >
                65
              </Text>
              
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: Styles.font.fontWeight.semiBold,
                  color: Styles.colors.ligthTheme.blue
                }}
              >
                Seguindo
              </Text>
            </View>

          </View>

          <View style={{flex: 1, height: 1, backgroundColor: Styles.colors.ligthTheme.orange, marginBottom: 10}} />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: 65,
              paddingHorizontal: 20,
              backgroundColor: Styles.colors.ligthTheme.Thatch,
              marginBottom: 15
            }}
          >
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: Styles.font.fontWeight.semiBold,
                  color: Styles.colors.ligthTheme.blue
                }}
              >
                20
              </Text>
              
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: Styles.font.fontWeight.semiBold,
                  color: Styles.colors.ligthTheme.blue
                }}
              >
                Livros lidos
              </Text>
            </View>

            <View style={{height: '100%', width: 1, backgroundColor: Styles.colors.ligthTheme.orange}} />

            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: Styles.font.fontWeight.semiBold,
                  color: Styles.colors.ligthTheme.blue
                }}
              >
                7
              </Text>
              
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: Styles.font.fontWeight.semiBold,
                  color: Styles.colors.ligthTheme.blue
                }}
              >
                Resenhas
              </Text>
            </View>

            <View style={{height: '100%', width: 1, backgroundColor: Styles.colors.ligthTheme.orange}} />

            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: Styles.font.fontWeight.semiBold,
                  color: Styles.colors.ligthTheme.blue
                }}
              >
                8
              </Text>
              
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: Styles.font.fontWeight.semiBold,
                  color: Styles.colors.ligthTheme.blue
                }}
              >
                Comentários
              </Text>
            </View>

          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: 105,
              paddingHorizontal: 20,
              backgroundColor: Styles.colors.ligthTheme.Thatch,
              marginBottom: 15
            }}
          >
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: Styles.font.fontWeight.regular,
                  color: Styles.colors.ligthTheme.opaqueText
                }}
              >
                Livros lidos
              </Text>
              
              <Text
                style={{
                  fontSize: 40,
                  fontWeight: Styles.font.fontWeight.semiBold,
                  color: Styles.colors.ligthTheme.blue
                }}
              >
                7
              </Text>

              <Text
                style={{
                  fontSize: 16,
                  fontWeight: Styles.font.fontWeight.regular,
                  color: Styles.colors.ligthTheme.opaqueText
                }}
              >
                0 mo último mês
              </Text>
            </View>

            <View style={{height: '100%', width: 1, backgroundColor: Styles.colors.ligthTheme.orange}} />

            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: Styles.font.fontWeight.regular,
                  color: Styles.colors.ligthTheme.opaqueText
                }}
              >
                Páginas lidas
              </Text>
              
              <Text
                style={{
                  fontSize: 40,
                  fontWeight: Styles.font.fontWeight.semiBold,
                  color: Styles.colors.ligthTheme.blue,
                }}
              >
                2457
              </Text>

              <Text
                style={{
                  fontSize: 16,
                  fontWeight: Styles.font.fontWeight.regular,
                  color: Styles.colors.ligthTheme.opaqueText
                }}
              >
                0 mo último mês
              </Text>
            </View>

          </View>

          <View style={Styles.item}>
            <TouchableOpacity
              style={{
                backgroundColor: Styles.colors.ligthTheme.button,
                width: 137,
                height: 27,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center'
              }} 
              onPress={() => {
              setLoged(false)
            }}>
              <Text
                style={{
                  color: Styles.colors.ligthTheme.blue,
                  fontWeight: Styles.font.fontWeight.semiBold,
                  fontSize: 15
                }}
              >
                SAIR
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
  
    );
  }