import { ApolloClient, InMemoryCache } from '@apollo/client'

export const createApolloClient = () => new ApolloClient({
    uri: 'http://192.168.0.105:4000/graphql',
    cache: new InMemoryCache(),
})