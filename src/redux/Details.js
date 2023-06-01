import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
export default function Details() {
    const navigation = useNavigation();
    return (
        <View style={{  justifyContent: 'center', alignItems: 'center' }}>
            <Text>Welcome</Text>
            

            <TouchableOpacity onPress={() => navigation.navigate('data')}

                style={{ ...styles.btn, backgroundColor: "blue"}}>
                <Text style={styles.btn_text}> Details</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#086972',
        padding: 10,
        margin: 10,
        borderRadius: 10,
    },
    btn_text: {
        fontSize: 23,
        color: '#fff',
    },
});