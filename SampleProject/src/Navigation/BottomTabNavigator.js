import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import Details from "../Screens/Details";
import Expnases from "../Screens/Expnases";
import AddCustomer from "../Screens/AddCustomer";
import { Text } from "react-native";

const BottomTabNavigator = () =>{
    const Tab = createBottomTabNavigator();

    return(
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarStyle:{
                    height:'9%',
                    backgroundColor:'#ddddd9',
                    alignItems:'center',
                    
                },
                tabBarLabelPosition:'below-icon',
                tabBarHideOnKeyboard:true
            }}
        >

            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{headerShown:false,
                    tabBarLabel :'Home'
                
                }}   
            />

            <Tab.Screen
                name="DetailsScreen"
                component={Details}
                options={{headerShown:false,
                    tabBarLabel :'Details'
                
                }} 
            />

            <Tab.Screen
                name="AddCustomer"
                component={AddCustomer}
                options={{headerShown:false,
                    tabBarLabel :'Add Customer'
                
                }} 
            />

            <Tab.Screen
                name="Expanses"
                component={Expnases}
                options={{headerShown:false,
                    tabBarLabel : 'Expanses'
                
                }} 
            />

        </Tab.Navigator>

    )
}

export default BottomTabNavigator;