import React, {useEffect} from "react";
import {MainStack, AuthStack} from "./src/navigation";
import {useSelector} from "react-redux";
import {RootState} from "./src/redux/store";

export default function App() {

    const isLogged = useSelector<RootState>(state => state.auth.isLogged);

    useEffect(() => {

    },[isLogged])

    return isLogged ? <MainStack /> : <AuthStack />
}