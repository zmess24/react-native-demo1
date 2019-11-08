import React, { useReducer } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const reducer = (state, { type, payload }) => {
    switch (type) {
        case 'increase_counter':
            return { counter: state.counter + payload };
        case 'decrease_counter':
            return { counter: state.counter + payload };
        default: 
            return state;
    };
};

export default CounterScreen = () => {
    const [{ counter }, dispatch] = useReducer(reducer, { counter: 0 });

    return (
        <View>
            <Text>Counter Screen</Text>
            <Text>{counter}</Text>
            <Button
                title="Increase"
                onPress={() => dispatch({ type: 'increase_counter', payload: 1 })}/>
            <Button
                title="Decrease"
                onPress={() => dispatch({ type:'decrease_counter', payload: -1 })}/>
        </View>
    );
};

const styles = StyleSheet.create({});