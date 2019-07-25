// Navigation/Navigation.js

import { createStackNavigator, createAppContainer } from 'react-navigation'
import Connexion    from '../views/Connexion'
import Welcome      from '../views/Welcome'

const SearchStackNavigator = createStackNavigator({
    Connexion: { // Ici j'ai appelé la vue "Connexion" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
        screen: Connexion,
        navigationOptions: {
            title: 'Connexion'
        }
    },
    Welcome: {
        screen: Welcome
    }
})

export default createAppContainer(SearchStackNavigator)