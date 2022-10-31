import {Text, View} from "react-native";
import {FC} from "react";
import Card from "./Card";
import styles from "./styles";
import {Clinician} from "../../interfaces";


interface Props {
    onPressViewProfile: (clinician:Clinician) => void,
    favoriteClinician: Clinician
}

const FavoriteClinician: FC<Props> = ({onPressViewProfile, favoriteClinician}) => {
    return (
        <>
            <View>
                <Text style={styles.favoriteText}>Favorite Clinician</Text>
               <Card
                   data={favoriteClinician}
                   onPressViewProfile={() => onPressViewProfile(favoriteClinician)}
               />
            </View>
            <View style={styles.divider} />
        </>
    )
}

export default FavoriteClinician