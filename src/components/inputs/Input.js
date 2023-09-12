import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Styles = require('../../global/style.json')

export default function Input({
    marginTop = 20,
    title = '',
    placeholder = 'Placeholder',
    secureTextEntry = false,
    onIconPress = () => alert('Icon Pressed'),
    showIcon = false,
    icon = 'eye',
    keyboardType='default',
    value = value,
    onChangeText = (e) => {e.target.value}
}) {
    return (
        <View style={{
            marginTop: marginTop
          }}>
            {
            title &&
                <Text style={{marginLeft: 5}}>
                {title}
                </Text>
            }
    
            <View
              style={{
                flexDirection: 'row', 
                width: 295,
                height: 40,
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderColor: Styles.colors.ligthTheme.contorno,
                borderWidth: 1,
                borderRadius: 10,
                paddingLeft: 10,
                alignItems: 'center',
              }}
            >
              <View style={{
                flexDirection: 'row', 
                width: 240,
                height: 40,
                justifyContent: 'flex-start'
              }}>
                <TextInput
                  placeholder={placeholder}
                  keyboardType={keyboardType}
                  secureTextEntry={secureTextEntry}
                  value={value}
                  onChangeText={onChangeText}
                />
              </View>
    
              {
                showIcon&&
                <View
                    style={{
                    flexDirection: 'row', 
                    width: 40,
                    height: 30,
                    justifyContent: 'center'
                    }}
                >
                    <TouchableOpacity
                    onPress={onIconPress}
                    >
                    <MaterialCommunityIcons name={icon} color={"#32435F"} size={30} />
                    </TouchableOpacity>
                </View>
              }
    
            </View>
    
          </View>
    )
}