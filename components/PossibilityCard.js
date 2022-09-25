import { View, TouchableOpacity, Text, Image } from "react-native";
import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { CircleButton, HeartButton } from "../components/Button";
import React from 'react';

const PossibilityCard = ({ data, navigation }) => (
    <View style={{
        flex: 1,
        margin: 10,
        height: 150,
        width: 150,
    }}>
        <TouchableOpacity onPress={() => {
            navigation.navigate("Submission")
        }}>
            <Image 
                source={data.image}
                resizeMode="contain"
                style={{
                width: "100%",
                height: "100%",
                borderTopLeftRadius: SIZES.font,
                borderTopRightRadius: SIZES.font,
                }}/>
        </TouchableOpacity>
    </View>
  );

export default PossibilityCard