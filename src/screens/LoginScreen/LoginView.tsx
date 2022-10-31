import styles from './styles';
import { SafeAreaView, TextInput, Image, Text, TouchableOpacity } from 'react-native'
import {FC} from "react";

const Logo = require('../../icons/medical.png');

interface Props {
    onChangeUsername: (username: string) => void;
    onChangePassword: (password: string) => void;
    onPressLogin: () => void;
}

const LoginView: FC <Props> = ({onPressLogin, onChangePassword, onChangeUsername}) => {
    return (
        <SafeAreaView style={styles.screenContainer}>
            <Image source={Logo} style={styles.logo} />
            <TextInput
                style={styles.input}
                onChangeText={onChangeUsername}
                placeholder="Username"
            />
            <TextInput
                secureTextEntry
                style={styles.input}
                onChangeText={onChangePassword}
                placeholder="Password"
            />
            <TouchableOpacity style={styles.button} onPress={onPressLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default LoginView