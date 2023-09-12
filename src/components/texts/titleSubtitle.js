import { Text, View } from 'react-native';

import Styles from '../../global/style.json'

export default function TitleSubtitle() {
    return (
        <View style={Styles.item}>
            <Text
                style={{
                fontSize: 32,
                color: Styles.colors.ligthTheme.primary,
                fontWeight: "bold",
                marginBottom: 21
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
                marginBottom: 50
                }}
            >
                para ler e aprender
            </Text>
        </View>
    )
}