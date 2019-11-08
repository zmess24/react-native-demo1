import React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
		<Text style={styles.text}>HomeScreen</Text>
		<Button 
			onPress={() => navigation.navigate('ListScreen')}
			title="Go to List Demo"/>
		<Button 
			onPress={() => navigation.navigate('ImageScreen')}
			title="Go to Image Demo"/>
		<Button 
			onPress={() => navigation.navigate('CounterScreen')}
			title="Go to Counter Demo"/>
		<Button 
			onPress={() => navigation.navigate('ColorScreen')}
			title="Go to Color Demo"/>
		<Button 
			onPress={() => navigation.navigate('SquareScreen')}
			title="Go to Square Demo"/>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
