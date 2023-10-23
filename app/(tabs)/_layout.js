import { View, Text } from "react-native";
import React from "react";
import Tabs from "expo-router/tabs";
import { Ionicons } from "@expo/vector-icons";

export default ()=>{
    return(
        <Tabs >
            <Tabs.Screen name="productspage"  options={{title:'products',tabBarIcon :()=>
            <Ionicons name='fast-food-outline' size={20} />}}/>
             <Tabs.Screen name="billingPage"  options={{title:'billing' ,tabBarIcon :()=>
            <Ionicons name="newspaper-outline" size={20} />}} />
        </Tabs>
    )
}