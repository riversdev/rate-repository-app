import { Image, StyleSheet, View, Platform } from 'react-native'
import { theme } from '../theme'
import { StyleText } from './StyleText'

export const RepositoryItemHeader = ({ fullName, description, language, ownerAvatarUrl }) => {
    return (
        <View style={{ flexDirection: 'row', paddingBottom: 2 }}>
            <View style={{ paddingRight: 10 }}>
                <Image style={styles.image} source={{ uri: ownerAvatarUrl }} />
            </View>
            <View style={{ flex: 1 }}>
                <StyleText fontWeight='bold'>{fullName}</StyleText>
                <StyleText color='secondary' >{description}</StyleText>
                <StyleText style={styles.language}>{language}</StyleText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    language: {
        padding: 4,
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        // asi se distingue entre SO //////////////////////////////////////////////////
        // backgroundColor: Platform.OS === 'android' ? 'red' : '#89f',
        // backgroundColor: Platform.select({
        //     android: theme.colors.primary,
        //     ios: 'orange',
        //     default: 'purple',
        // }),
        alignSelf: 'flex-start', // asi toma el ancho del elemento y se posiciona
        marginVertical: 4,
        borderRadius: 4,
        overflow: 'hidden',
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 4,
    },
})