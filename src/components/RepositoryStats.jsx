import { View } from 'react-native'
import { StyleText } from './StyleText'

const parseThousands = value => value >= 1000
    ? `${Math.round(value / 100) / 10}k`
    : String(value)

export const RepositoryStats = ({ forksCount, startgazersCount, ratingAverage, reviewCount }) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View>
                <StyleText align='center'>{parseThousands(forksCount)}</StyleText>
                <StyleText align='center' fontWeight='bold'>Forks</StyleText>
            </View>
            <View>
                <StyleText align='center'>{parseThousands(startgazersCount)}</StyleText>
                <StyleText align='center' fontWeight='bold'>Stars</StyleText>
            </View>
            <View>
                <StyleText align='center'>{ratingAverage}</StyleText>
                <StyleText align='center' fontWeight='bold'>Rating</StyleText>
            </View>
            <View>
                <StyleText align='center'>{reviewCount}</StyleText>
                <StyleText align='center' fontWeight='bold'>Reviews</StyleText>
            </View>
        </View>
    )
}