import React from 'react'
import { Text, View,StatusBar } from 'react-native'



const Splash = ({navigation}) => {

    setTimeout(()=>{
        navigation.replace('Auth')
    },3000)
    return (
        <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor: "#1d4ed8" }} >
            <StatusBar barStyle="light-content" hidden={false} backgroundColor="#465bd8" />
                
            <Text style={{fontSize:30,color: "#fff" }} >splash</Text>
        </View>
    );
};
export default Splash;