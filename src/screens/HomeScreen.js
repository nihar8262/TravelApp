import { StatusBar } from 'expo-status-bar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Image, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {FontAwesome} from '@expo/vector-icons'
import React from 'react';
import tw from 'twrnc'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from '../components/categories';
import SortCategory from '../components/sortCategories';
import Destination from '../components/destinations';

const android =Platform.OS=='android';
const topMargin = android? 'mt-10' : 'mt-3';
const Stack = createNativeStackNavigator();

export default function HomeScreen() {
  return (
          <SafeAreaView style={tw`flex-1 bg-white`}>
             <ScrollView showsVerticalScrollIndicator={false} style={tw`py-14`}>
                {/* avatar */}
                <View style={tw`mx-5 flex-row justify-between items-center mb-10`}>
                    <Text style={tw`font-bold text-neutral-700 text-3xl`}>Let's Discover</Text>
                    <TouchableOpacity>
                        <Image 
                          source={require('../../assets/images/avatar.png')}
                          style={{width:wp(12),height:wp(12)}}
                         />
                    </TouchableOpacity>
                </View>
                {/* Search bar  */}
                <View style={tw`mx-5 mb-4`}>
                    <View style={tw`flex-row items-center bg-neutral-100 rounded-full p-4 px-4 pl-6`}>
                    <FontAwesome name="search" size={24} color="black" />
                    <TextInput 
                      placeholder='Search destination'
                      placeholderTextColor={'gray'}
                      style={tw`flex-1 text-base  mb-1 pl-1 tracking-wider`}
                    />
                    </View>
                </View>
                {/* Categories */}
                <View style={tw`mb-4`}>
                    <Categories/>
                </View>

                {/* sort */}
                <View style={tw`mb-4`}>
                    <SortCategory/>
                </View>

                {/* destinations */}
                <View>
                    <Destination/>
                </View>
             </ScrollView>
          </SafeAreaView>
  );
}