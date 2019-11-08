import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const reducer = (state, { type, payload }) => {
    switch(type) {
        case 'change_red':
            return state.red + payload > 255 || state.red + payload < 0
                ? state
                : {...state, red: state.red + payload} 
        case 'change_green':
            return state.green + payload > 255 || state.green + payload < 0
                ? state
                : {...state, green: state.green + payload}
        case 'change_blue':
            return state.blue + payload > 255 || state.blue + payload < 0
                ? state
                : {...state, blue: state.blue + payload}
        default:
            return state;
    };
};

export default SquareScreen = () => {
    const [{red, green, blue}, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    return (
        <View>
            <ColorCounter 
                onIncrease={() => dispatch({ type: 'change_red', payload: COLOR_INCREMENT })} 
                onDecrease={() => dispatch({ type: 'change_red', payload: -1*COLOR_INCREMENT })} 
                color="Red"/>
            <ColorCounter 
                onIncrease={() => dispatch({ type: 'change_green', payload: COLOR_INCREMENT })} 
                onDecrease={() => dispatch({ type: 'change_green', payload: -1*COLOR_INCREMENT })} 
                color="Green"/>
            <ColorCounter 
                onIncrease={() => dispatch({ type: 'change_blue', payload: COLOR_INCREMENT })} 
                onDecrease={() => dispatch({ type: 'change_blue', payload: -1*COLOR_INCREMENT })} 
                color="Blue"/>
            <View style={{
                height: 150,
                width: 150,
                backgroundColor: `rgb(${red}, ${green}, ${blue})`
            }}/>
        </View>
    )
};

const styles = StyleSheet.create({});