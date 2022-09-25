import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, Text} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import BackHeader from '../components/BackHeader';

const ImageSelector = ({navigation}) => {
  const [image, setImage] = useState(null);
  const [image2, setImage2] = useState(null);

  const pickImage1 = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      selectionLimit: 2
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  const pickImage2 = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      selectionLimit: 2
    });

    console.log(result);

    if (!result.cancelled) {
      setImage2(result.uri);
    }
  };

  const clearImage = () => {
    setImage(null);
    setImage2(null);
  }

  return (
    <View style={{alignItems: 'center', justifyContent: 'center' }}>
      <BackHeader navigation={navigation} />
      <Text>Pick 2 clothing images</Text>
      {!image && <Button title="Image 1" onPress={pickImage1} />}
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      {!image2 && <Button title="Image 2" onPress={pickImage2} />}
      {image2 && <Image source={{ uri: image2 }} style={{ width: 200, height: 200 }} />}
      {image && image2 && <Button title='Generate' onPress={() => {navigation.navigate("wip")}}/>}
      <Button title="Cancle" onPress={() => {clearImage()}}/>
    </View>
  );
}

export default ImageSelector;