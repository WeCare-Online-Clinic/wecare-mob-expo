import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function ButtonLogin({ text, onPress }){
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{ text }</Text>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 100,
        paddingVertical: 12,
        paddingHorizontal: 5,
        backgroundColor: '#04799E',
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
    }
})