import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from './action';
export default function Home() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const Login = () => {
        if (username.length == 0 || password.length == 0) {
            Alert.alert("Username or Password Required")
        }
        else {
            dispatch(login(username, password));
            navigation.navigate('detail')
            setUsername('')
            setPassword('')
        };
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title_text}>LOGIN</Text>
            <View>
                <TextInput style={{ borderWidth: 1, width: 300, borderRadius: 15 }}
                    placeholder='Username'
                    value={username}
                    onChangeText={(e) => setUsername(e)} />
            </View>
            <View style={{ paddingTop: 10 }}>
                <TextInput style={{ borderWidth: 1, width: 300, borderRadius: 15 }}
                    placeholder='Password'
                    value={password}
                    secureTextEntry={true}
                    onChangeText={(e) => setPassword(e)} />
            </View>
            <TouchableOpacity
                onPress={Login}
                style={{ ...styles.btn, backgroundColor: 'blue' }}>
                <Text style={styles.btn_text}> Login </Text>
            </TouchableOpacity>
        </View>);
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection: 'column',
        padding: 55,
    },
    title_text: {
        fontSize: 30,
        fontWeight: '900',
        marginBottom: 55,
    },
    counter_text: {
        fontSize: 35,
        fontWeight: '900',
        margin: 15,
    },
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