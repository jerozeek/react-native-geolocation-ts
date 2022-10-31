import {FC, useState, useEffect} from "react";
import mockData from "../../mockData";
import {useNavigation, NavigationProp} from "@react-navigation/native";
import HomeView from "./HomeView";
import {Clinician, UserLocation} from "../../interfaces";
import {StackParamsList} from "../../navigation";
import {cliniciansActions} from "../../redux/slices/cliniciansSlices";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import Geolocation, {GeolocationResponse} from '@react-native-community/geolocation';

type NavigationProps = NavigationProp<StackParamsList>;

const HomeScreen: FC = () => {

    const { navigate }  = useNavigation<NavigationProps>();
    const clinicians    = useSelector<RootState, Clinician[]>(state => state.clinicians.data);

    const dispatch = useDispatch();

    const [modalVisible, setModalVisible] = useState(false);
    const [userLocation, setUserLocation] = useState<UserLocation | GeolocationResponse | undefined>(undefined);

    useEffect(() => {
        dispatch(cliniciansActions.getClinicians(mockData));
        Geolocation.getCurrentPosition((info: GeolocationResponse) => setUserLocation(info));
    },[]);

    const onPressViewProfile = (clinician: Clinician) => {
        return navigate('Details', {clinician});
    }

    const favoriteClinician = useSelector<RootState, Clinician | undefined>(state => {
        return state.clinicians.favoriteClinician ? state.clinicians.favoriteClinician : undefined;
    });

    const onPressShowAll = () => {
        dispatch(cliniciansActions.getClinicians(mockData));
        setModalVisible(false);
    }

    const onPressFilterByLocation = () => {
        const longitude: number             = userLocation?.coords.longitude || 0;
        const latitude: number              = userLocation?.coords.latitude || 0;
        const nearLocations: Clinician[]    = [];

        clinicians.map(async clinician => {
            let location = JSON.parse(clinician.location);

            const pointIn = {
                latitude: parseFloat(location[0]),
                longitude: parseFloat(location[1]),
            };

            const distance = calculateDistance(latitude, longitude, pointIn.latitude, pointIn.longitude, 'K');

            if (distance < 3000) {
                nearLocations.push(clinician);
            }
        });

        dispatch(cliniciansActions.getClinicians(nearLocations));
        setModalVisible(!modalVisible);
    }

    function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number, unit: string) {
        const radlat1 = Math.PI * lat1 / 180;
        const radlat2 = Math.PI * lat2 / 180;
        const theta = lon1 - lon2;
        const radtheta = Math.PI * theta / 180;
        let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        dist = Math.acos(dist);
        dist = dist * 180 / Math.PI;
        dist = dist * 60 * 1.1515;
        if (unit === 'K') {
            dist = dist * 1.609344;
        }
        if (unit === 'N') {
            dist = dist * 0.8684;
        }
        return parseInt(dist + unit);
    }

    return (
       <HomeView
           data={clinicians}
           onPressViewProfile={onPressViewProfile}
           favoriteClinician={favoriteClinician}
           modalVisible={modalVisible}
           setModalVisible={setModalVisible}
           onPressShowAll={onPressShowAll}
           onPressFilterByLocation={onPressFilterByLocation}
       />
    )
}

export default HomeScreen;