import { View, Text ,ScrollView,TextInput,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation=useNavigation();

    const handleLogin=()=>{
        const user={
            email:email,
            password:password
        };
        axios.post("http://172.16.3.106:3000/Login",user).then((response)=>{
            console.log(response);
            const token = response.data.token;
            AsyncStorage.setItem("auth", token);
            navigation.navigate("New")
            setEmail("")
            setPassword("")
        }).catch((error)=>{
            console.error("Login failed:",error)
            setEmail("")
            setPassword("")
        })
    }
    return (
        <View style={{ flex: 1 }}>

            <ScrollView>


                <TextInput
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    placeholder='Enter your Email'
                    placeholderTextColor='white'
                    style={{ width: 320, fontSize: 16, marginVertical: 5, color: 'white', backgroundColor: '#91A3B0', padding: 15, borderRadius: 150, marginLeft: 10 }} />


                <TextInput
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    placeholder='Enter your password'
                    placeholderTextColor='white'
                    style={{ width: 320, fontSize: 16, marginVertical: 5, color: 'white', backgroundColor: '#91A3B0', padding: 15, borderRadius: 150, marginLeft: 10 }} />

                <TouchableOpacity onPress={handleLogin}
                    style={{ width: 300, fontSize: 16, marginVertical: 15, color: 'white', backgroundColor: '#676767', padding: 15, borderRadius: 150, marginLeft: 25 }}>
                    <Text style={{ textAlign: 'center', fontSize: wp(6), color: 'white' }}>
                        Login
                    </Text>
                </TouchableOpacity>
            </ScrollView>

        </View>
    )
}

export default Login