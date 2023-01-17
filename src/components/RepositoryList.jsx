import { FlatList } from 'react-native'
import { useRepositories } from '../hooks/useRepositories'
import { RepositoryItem } from './RepositoryItem'

export const RepositoryList = () => {
    const { repositories } = useRepositories()

    return (
        <FlatList
            data={repositories}
            renderItem={({ item }) => <RepositoryItem {...item} />}
            keyExtractor={item => item.id}
        />
    )
}