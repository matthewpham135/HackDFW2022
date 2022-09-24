import React from "react";
import { View, Text, Image, TextInput } from "react-native";

import { COLORS, FONTS, SIZES, assets } from "../constants";

import {CircleButton} from "../components/Button"
import { Directions } from "react-native-gesture-handler";
import { ImageBackground } from "react-native-web";




const BackHeader = ({ navigation }) => {
  return (
    <View
      style={{
        padding: SIZES.font,
        width: "100%",
        height: "15%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start"
      }}
    >
        <View style={{
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "center",
            height: "100%",
            width: "15%",
            backgroundColor: "yellow"

        }}>
            <CircleButton
                imgUrl={assets.left}
                resizeMode="contain"
                style={{ width: "100%", height: "100%"}}
                handlePress = { navigation.goBack}
                backgroundColor = "white"
            />
        </View>



    </View>
  );
};

export default BackHeader;