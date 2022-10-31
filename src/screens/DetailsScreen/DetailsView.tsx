import {Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import {Clinician} from "../../interfaces";
import {FC} from "react";
import colors from "../../theme";

interface Props {
    data: Clinician,
    isFavourite: boolean,
    onPressSelectFavoriteClinician: () => void
}

const DetailsView: FC<Props> = ({data, isFavourite, onPressSelectFavoriteClinician}) => {

    const backgroundColor = isFavourite ? colors.BLUE : "transparent";

    return (
        <View style={styles.screenContainer}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollView}
            >
                <View style={styles.favoriteContainer}>
                    <TouchableOpacity style={[styles.favoriteButton, {backgroundColor}]} onPress={onPressSelectFavoriteClinician} />
                    <Text style={styles.favoriteText}>Favourite Clinician</Text>
                </View>
                <Image style={styles.avatar} source={{uri: data.imageUrl}} />
                <Text style={styles.name}>{data.fullName}</Text>
                <Text style={styles.contactInformation}>{data.phone}</Text>
                <Text style={styles.contactInformation}>{data.email}</Text>
                <Text>{`\n ${data.bio}`}</Text>
            </ScrollView>
        </View>
    )
}

export default DetailsView;