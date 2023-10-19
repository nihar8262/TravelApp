import React, { useState } from "react";
import { View,Text, TouchableOpacity, ScrollView, Image } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import tw from 'twrnc';
import { theme } from "../theme";
import { categoriesData, sortCategoryData } from "../constants";

export default function SortCategory() {
    const [activeSort,setActiveSort] = useState('Popular');

    return(
        <View style={tw`flex-row justify-around items-center mx-4 bg-neutral-100 rounded-full p-2 px-4 `}>
            {
                sortCategoryData.map((sort,index)=>{
                    let isActive = sort==activeSort;
                    let activeButtonClass = isActive?'bg-white shadow' :'';
                    return(
                        <TouchableOpacity onPress={()=>setActiveSort(sort)}  key={index} style={tw`p-3 px-4 rounded-full flex  ${activeButtonClass}` }>
                            <Text style={{fontSize:wp(4),color: isActive? theme.text : 'rgba(0,0,0,0.6)',fontWeight:600}}>
                                {sort}
                            </Text>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}
