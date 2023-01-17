import { StyleSheet, View } from 'react-native'
import { theme } from '../theme'
import { RepositoryItemHeader } from './RepositoryItemHeader'
import { RepositoryStats } from './RepositoryStats'

export const RepositoryItem = (item) => {
    return (
        <View style={styles.container}>
            <RepositoryItemHeader {...item} />
            <RepositoryStats {...item} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
})