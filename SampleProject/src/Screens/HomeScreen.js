import { StyleSheet, Text, View,TextInput, TouchableOpacity, Button, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCustomer } from '../Redux/Actions';



const HomeScreen = () => {
  const Dispatch = useDispatch();
  const [customer,setCustomer] = useState();
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#f6f6f6'}}>
      <TextInput placeholder='Enter Your Name' onChangeText={(value)=>{setCustomer(value)}} style={{flex:0.05,width:'60%', borderBottomWidth:2,borderColor:'red',color:'red'}}></TextInput>
      <TouchableOpacity onPress={()=>{Dispatch(addCustomer(customer)), console.log(customer)}} style={{height:'7%', width:'25%', backgroundColor:'#3699ff', alignItems:'center',justifyContent:'center', marginTop:'5%', borderRadius:10}}>
        <Text style={{color:'white'}} >Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})