import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

export default ImageScreen = () => {
    return (
        <View>
            <Text>Image Screen</Text>
            <ImageDetail 
                title="Beach" 
                imageSource={require('../../assets/beach.jpg')}/>
            <ImageDetail 
                title="Forest" 
                imageSource={require('../../assets/forest.jpg')}/>
            <ImageDetail 
                title="Mountain" 
                imageSource={require('../../assets/mountain.jpg')}/>
        </View>
    );
};

const styles = StyleSheet.create({});