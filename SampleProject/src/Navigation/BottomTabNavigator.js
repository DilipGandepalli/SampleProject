import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import Details from "../Screens/Details";
import Expnases from "../Screens/Expnases";
import AddCustomer from "../Screens/AddCustomer";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

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
                    tabBarLabel :'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                      ),                
                }}   
            />

            <Tab.Screen
                name="DetailsScreen"
                component={Details}
                options={{headerShown:false,
                    tabBarLabel :'Details',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="information-outline" color={color} size={size} />
                      ),                               
                }} 
            />

            <Tab.Screen
                name="AddCustomer"
                component={AddCustomer}
                options={{headerShown:false,
                    tabBarLabel :'Add Customer',
                    tabBarIcon :({color,size}) =>(
                        <Ionicons name="add-circle" color={color} size={size}/>               
                    )                
                }} 
            />

            <Tab.Screen
                name="Expanses"
                component={Expnases}
                options={{headerShown:false,
                    tabBarLabel : 'Expanses',
                    tabBarIcon : ({color,size}) =>(
                        <MaterialIcons name="attach-money" color={color} size={size}/>
                    )
                }} 
            />

        </Tab.Navigator>

    )
}

export default BottomTabNavigator;