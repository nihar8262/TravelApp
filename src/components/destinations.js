import React, { useState } from "react";
import { View,Text, TouchableOpacity, ScrollView, Image } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import tw from 'twrnc';
import { theme } from "../theme";
import {LinearGradient} from 'expo-linear-gradient'
import {FontAwesome} from '@expo/vector-icons'
import { categoriesData, destinationData, sortCategoryData } from "../constants";
import { useNavigation } from "@react-navigation/native";

export default function Destination() {
    
    const navigation = useNavigation();

    return(
       
       
        <View style={tw`flex-row justify-between flex-wrap `}>
            {
                destinationData.map((item,index)=>{
                    return(
                        <DestinationCard navigation={navigation} item={item} key={index}/>
                    )
                })
            }
           
        </View>
        
    )
}

const DestinationCard =({item,navigation})=>{
    const [isFavorite,toggleFavorite] = useState(false);
    return (
        
      
        <TouchableOpacity onPress={()=>navigation.navigate("destination",{...item})}
         style={tw`flex  relative p-2 ml-2 mb-5 w-46 h-65`}
       >
        <Image
         source={item.image}
         style={tw`absolute w-44 h-65 rounded-lg`}
         />

         <TouchableOpacity onPress={()=>toggleFavorite(!isFavorite)} 
         style={tw`absolute top-2 right-3 bg-[#FFFFFF66] rounded-full p-2`}>
            <FontAwesome name="heart" size={22} color={isFavorite ? "red" :  "white"} />
         
         </TouchableOpacity>
         

         <Text style={tw`text-white font-semibold text-sm`}>{item.title}</Text>
         <Text style={tw`text-white text-xs`}>{item.shortDescription}</Text>

         
       </TouchableOpacity>
      
    )
}
