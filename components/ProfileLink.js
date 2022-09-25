import React from "react";
import { View, Text, SafeAreaView, Image, StatusBar, FlatList } from "react-native";

import { COLORS, SIZES, assets, SHADOWS, FONTS } from "../constants";
import { CircleButton, RectButton } from "../components/Button"
import { FocusedStatusBar } from "../components"
import BackHeader from "../components/BackHeader";

const ProfileLink = ({ route, text }) => {
    return (
        <View style={{
            width: "100%",
            height: "20%",
            display: "flex",
            flexDirection: "row",
            alignItems: "space-between",
            justifyContent: "center",
            
          }}>
            <Text style={{
              textAlign: 'center',
              width: '50%',
              height: '100%',
              fontSize: '25px'
            }}>{text}</Text>
            <Image source={assets.right}style={{
              width: "10%",
              height: "15%",
              aspectRatio: 1,
              
            }}/>
          </View>
        )
}        
        
export default ProfileLink