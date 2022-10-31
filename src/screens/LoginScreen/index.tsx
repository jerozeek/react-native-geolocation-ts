import LoginView from "./LoginView";
import {FC, useState, useEffect} from "react";
import { Alert } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { authActions } from "../../redux/slices/authSlice";
import Geolocation from "@react-native-community/geolocation";

const LoginScreen: FC = () => {

    const dispatch = useDispatch();

    const [username, onChangeUsername] = useState<string>('');
    const [password, onChangePassword] = useState<string>('');

    useEffect(() => {
        Geolocation.requestAuthorization();
    },[])

    const onPressLogin = async () => {
        try {
            await AsyncStorage.setItem('token', '1234');
            dispatch(authActions.authenticateUser(true));
        }
        catch (error) {
            Alert.alert('Login failed', `${error}`, [{text: 'OK', onPress: () => console.log('Ok pressed')}]);
        }
    }


    return (
        <LoginView
            onPressLogin={onPressLogin}
            onChangePassword={onChangePassword}
            onChangeUsername={onChangeUsername}
        />
    )
}


export default LoginScreen