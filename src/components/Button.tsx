import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import colors from '../styles/colors'

export function Button() {
    return(
        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
            <Text style={styles.buttonText}>
                b
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.green,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 16,
        marginBottom: 10,
        height: 86,
        width: 56
    },
    buttonText: {
        color: colors.white,
        fontSize: 24
    }
})