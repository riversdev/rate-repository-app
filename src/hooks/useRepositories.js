import { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../graphql/queries'

export const useRepositories = () => {
    const { data = {}, loading, refetch } = useQuery(GET_REPOSITORIES)
    const { repositories } = data

    const repositoriesNodes = repositories
        ? repositories.edges.map(edge => edge.node)
        : []

    return {
        repositories: repositoriesNodes,
        loading,
        refetch,
    }
}

// export const useRepositories = () => {
//     const [repositories, setRepositories] = useState(null)

//     useEffect(() => {
//         const searchRepositories = async () => {
//             try {
//                 const response = await globalThis.fetch('http://192.168.0.105:5000/api/repositories')
//                 const data = await response.json()

//                 setRepositories(data)
//             } catch (error) {
//                 console.warn('Iniciar el sevidor del backend y cambiar la ip actual en el hook')
//                 console.error(error)
//             }
//         }

//         searchRepositories()
//     }, [])

//     const repositoriesNodes = repositories
//         ? repositories.edges.map(edge => edge.node)
//         : []

//     return {
//         repositories: repositoriesNodes
//     }
// }