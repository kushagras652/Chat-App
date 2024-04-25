import { View, Text, TextInput, TouchableOpacity, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LottieView from 'lottie-react-native';
import Login from '../component/Login';
import Register from '../component/Register';

const SignIn = () => {
  const [option, setOption] = useState("Login")
  return (

    <View style={{ flex: 1, marginLeft: 10 }}>
      <LottieView style={{ width: '100%', height: hp(45) }}
        source={require('../assets/images/welcome.json')}
        autoPlay
        loop
      />
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <Pressable onPress={() => setOption("Login")}>
          <Text style={{ fontSize: wp(8), textAlign: 'center', bottom: 20, color: option == "Login" ? "black" : "grey" }}>Login</Text>
        </Pressable>

        <Pressable onPress={() => setOption("Register")}>
          <Text style={{ fontSize: wp(8), textAlign: 'center', bottom: 20, color: option == "Register" ? "black" : "grey" }}>Register</Text>
        </Pressable>

      </View>

      {option == "Login" && (
        <Login />
      )
      }

      {option == "Register" && (
        <Register />
      )
      }

    </View>


  )
}

export default SignIn