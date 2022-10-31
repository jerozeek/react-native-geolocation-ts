import React, {FC} from "react";
import {View, Text, FlatList, SafeAreaView, TouchableOpacity} from "react-native";
import styles from "./styles";
import Card from "./Card";
import {Clinician} from "../../interfaces";
import FavoriteClinician from "./FavoriteClinician";
import FilterModal from "./FilterModal";

interface Props {
    data: Clinician[];
    onPressViewProfile: (clinician: Clinician) => void;
    favoriteClinician: Clinician | undefined;
    modalVisible: boolean;
    setModalVisible: (modalVisible: boolean) => void;
    onPressFilterByLocation: () => void;
    onPressShowAll: () => void;
}

const HomeView: FC<Props> = ({
     data,
     onPressViewProfile,
     favoriteClinician,
     modalVisible,
     setModalVisible,
     onPressFilterByLocation,
     onPressShowAll
}) => {
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.screenContainer}>
                <TouchableOpacity
                    onPress={() => setModalVisible(!modalVisible)}
                    style={styles.filterButton}
                >
                    <Text style={styles.filterText}>FILTER</Text>
                </TouchableOpacity>

                {
                    favoriteClinician !== undefined && (
                        <FavoriteClinician
                            onPressViewProfile={onPressViewProfile}
                            favoriteClinician={favoriteClinician}
                        />
                    )
                }

                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={data}
                    renderItem={({item}: {item:Clinician}) => (
                        <Card
                            data={item}
                            onPressViewProfile={() => onPressViewProfile(item)}
                        />
                    )}
                    keyExtractor={(item: Clinician) => item.id}
                />
            </View>
            <FilterModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                onPressFilterByLocation={onPressFilterByLocation}
                onPressShowAll={onPressShowAll}
            />
        </SafeAreaView>
    )
}

export default HomeView;