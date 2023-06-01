import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
export default function user() {
    const username = useSelector(store => store.count.username)
    const password = useSelector(store => store.count.password)
    return (
        <View style={{  justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Welcome: {username}</Text>
            <Text style={{ fontSize: 25, fontWeight: 'bold' }}>password : {password}</Text>
        </View>)
}