import { StatusBar } from 'expo-status-bar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import {LinearGradient} from 'expo-linear-gradient'
import React from 'react';
import tw from 'twrnc'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function Welcome() {

    const navigation = useNavigation();

  return (
          <View style={tw`flex-1 flex justify-end`}>
            {/* Background Image */}
            <Image 
              source={require('../../assets/images/welcome.png')}
              style={tw`h-full w-full absolute`}
            />

            {/* content & gradient */}
            <View style={tw`p-5 pb-10  py-8`}>
            <LinearGradient
                      colors={['transparent','rgba(3,105,161,0.8)']}
                      style={tw`absolute w-100 h-60 mt-7`}
                      start={{x:0.5,y:0}}
                      end={{x:0.5,y:1}}

                      />
                <View style={tw`py-3`}>
                    <Text style={tw`text-white font-bold text-5xl`}>Travelling made easy!</Text>
                    <Text style={tw`text-neutral-200 font-medium`}>
                        Experience the world's best adventure around the world wiht us.
                    </Text>
                    <TouchableOpacity 
                        onPress={()=>navigation.navigate("home")}
                        style={tw`bg-orange-500 mx-auto p-3 px-12 rounded-full`}>
                        <Text style={tw`text-white font-bold`}>Let's Go</Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
          </View>
  );
}