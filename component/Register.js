import { View, Text, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';


const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigation=useNavigation();

    const handleRegister=()=>{
        const user={
            name:name,
            email:email,
            password:password,
        }
        axios.post("http://172.16.3.106:3000/Register",user).then((response)=>{
            console.log(response)

            Alert.alert("Registration Successfull", "Your registration is successfull", [
                { text: "OK", onPress: () => navigation.navigate('New') }
            ]);
            setName("");
            setEmail("");
            setPassword("");
        }).catch((error)=>{
            console.log("Error while registing the user",error)
            Alert.alert("Registration Failed","An error occured")
            setEmail("")
            setName("")
            setPassword("")
        })
    }
    return (
        <View style={{ flex: 1 }}>
            <ScrollView>

                <TextInput
                    value={name}
                    onChangeText={(text) => setName(text)}
                    placeholder='Enter your Name'
                    placeholderTextColor='white'
                    style={{ width: 320, fontSize: 16, marginVertical: 5, color: 'white', backgroundColor: '#91A3B0', padding: 15, borderRadius: 150, marginLeft: 10 }} />



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


                <TouchableOpacity onPress={handleRegister}
                    style={{ width: 300, fontSize: 16, marginVertical: 15, color: 'white', backgroundColor: '#676767', padding: 15, borderRadius: 150, marginLeft: 25 }}>
                    <Text style={{ textAlign: 'center', fontSize: wp(6), color: 'white' }}>
                        Register
                    </Text>
                </TouchableOpacity>

            </ScrollView>
        </View>
    )
}

export default Register