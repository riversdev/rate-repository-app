import { Platform, View } from 'react-native'
import { Routes, Route, Navigate } from 'react-router-native'
import { RepositoryList } from './RepositoryList'
import { Login } from '../pages/Login'

// asi se importan diferentes componentes dependiendo de la plataforma
// const AppBar = Platform.select({
//     and: () => require('./IOSAppBar').IOSAppBar,
//     default: () => require('./AppBar').AppBar,
// })()

// mejor manera de hacer lo de arriba...
// pero el fichero debe tener la extencion .ios o .android y aqui en la importacion NO debe tener extencion
import { AppBar } from './AppBar'

// hacerlo de preferencia al finalizar para no tener que editar todo en cada cambio

export const Main = () => {
    return (
        <View style={{ height: '100%' }}>
            <AppBar />
            <Routes>
                <Route path='/' element={<RepositoryList />} />
                <Route path='/signin' element={<Login />} />
                <Route path='/*' element={<Navigate to='/' />} />
            </Routes>
        </View>
    )
}