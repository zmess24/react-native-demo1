import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default ImageDetail = ({ title, imageSource }) => {
    return (
        <View>
            <Image source={imageSource} />
            <Text>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});