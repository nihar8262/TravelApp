import React from "react";
import { View,Text, TouchableOpacity, ScrollView, Image } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import tw from 'twrnc';
import { theme } from "../theme";
import { categoriesData } from "../constants";

export default function Categories() {
    return(
        <View style={tw`py-10`}>
            <View style={tw`mx-5 flex-row justify-between items-center`}>
                <Text style={tw`text-neutral-700 font-semibold text-xl`}>Categories</Text>
                <TouchableOpacity>
                    <Text style={{fontSize:wp(4),color: theme.text}}>See All</Text>
                </TouchableOpacity>
            </View>
            <ScrollView 
              horizontal
              contentContainerStyle={{paddingHorizontal:15}}
            //   style={tw`px-2`}
              showsHorizontalScrollIndicator={false}
            >
                {
                    categoriesData.map((cat,index)=>{
                        return(
                            <TouchableOpacity key={index} style={tw`flex items-center px-3 py-4`}>
                                <Image source={cat.image} style={{width:wp(20),height:wp(19),borderRadius:20}} />
                                <Text style={tw`text-neutral-700 font-medium`}>{cat.title}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}