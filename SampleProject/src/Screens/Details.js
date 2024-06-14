import {View, Text} from 'react-native'
import {useSelector}  from 'react-redux'


const Details = () =>{

    const customerDetails = useSelector((state)=> state.CustomerList.CustomerList)
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#f6f6f6'}}>
            <Text style={{fontSize:25}}>{customerDetails}</Text>
        </View>
    )
}

export default Details;