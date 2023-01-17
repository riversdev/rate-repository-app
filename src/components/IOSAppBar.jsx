import { StyleSheet, View, TouchableWithoutFeedback, ScrollView } from 'react-native'
import Constants from 'expo-constants'
import { theme } from '../theme'
import { StyleText } from './StyleText'
import { Link, useLocation } from 'react-router-native'

const AppBarTab = ({ children, to }) => {
    const { pathname } = useLocation()
    const active = pathname === to
    const textStyles = [
        styles.text,
        active && styles.active,
    ]

    return (
        <Link to={to} component={TouchableWithoutFeedback}>
            <StyleText fontWeight='bold' style={textStyles}>{children}</StyleText>
        </Link>
    )
}

export const IOSAppBar = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal style={styles.scroll}>
                <AppBarTab to='/'>Repositories</AppBarTab>
                <AppBarTab to='/signin'>Sign In</AppBarTab>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'red',
        paddingTop: Constants.statusBarHeight + 10,
        paddingHorizontal: 20,
    },
    scroll: {
        paddingBottom: 15,
    },
    text: {
        color: theme.appBar.textSecondary,
        marginRight: 10,
    },
    active: {
        color: theme.appBar.textPrimary,
    }
})