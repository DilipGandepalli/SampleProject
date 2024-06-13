import BottomTabNavigator from "./src/Navigation/BottomTabNavigator";
import {NavigationContainer} from '@react-navigation/native'
import {SafeAreaProvider} from 'react-native-safe-area-context'

const App = () =>{
    return(
        <SafeAreaProvider>
            <NavigationContainer>
                <BottomTabNavigator/>
            </NavigationContainer>
        </SafeAreaProvider>
    )
}

export default App;