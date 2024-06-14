import BottomTabNavigator from "./src/Navigation/BottomTabNavigator";
import {NavigationContainer} from '@react-navigation/native'
import {SafeAreaProvider} from 'react-native-safe-area-context'

import { Provider } from "react-redux";
import configueStore from "./src/Redux/Store";

const App = () =>{
    return(
        <Provider store={configueStore()}>
            <SafeAreaProvider>
                <NavigationContainer>
                    <BottomTabNavigator/>
                </NavigationContainer>
            </SafeAreaProvider>
        </Provider>
    )
}

export default App;