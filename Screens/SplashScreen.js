import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Animated, { LightSpeedInRight, LightSpeedOutLeft,FadeInDown, FadeOut  } from 'react-native-reanimated';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
    const navigation=useNavigation();
  return (
    <View style={{flex:1,backgroundColor:'#4C516D',justifyContent:'center',alignItems:'center'}}>
        <Animated.View entering={FadeInDown.duration(800).springify()}>
        <Text style={{color:'#fff',fontSize:wp(10)}}>ChatWave</Text>
        </Animated.View>

        <Animated.View entering={FadeInDown.duration(800).delay(300)} style={{position:'absolute',bottom:45,backgroundColor:'#8AB6D6',width:'80%',justifyContent:'center',alignItems:'center',padding:10,borderRadius:20}}>
        <TouchableOpacity onPress={()=>navigation.navigate('SignIn')}>
            <Text style={{fontSize:wp(5),color:'#4C516D'}}>
                Get Started
            </Text>
        </TouchableOpacity>
        </Animated.View>

    </View>
  );
}

export default SplashScreen;
