import {View, Text, Modal, TouchableOpacity} from "react-native";
import styles from './styles';
import {UserLocation} from "../../interfaces";
import {FC} from "react";


interface Props {
    userLocation?: UserLocation;
    modalVisible: boolean;
    setModalVisible: (modalVisible: boolean) => void;
    onPressShowAll: () => void;
    onPressFilterByLocation: () => void;
}


const FilterModal: FC<Props> = ({userLocation, setModalVisible, modalVisible, onPressFilterByLocation, onPressShowAll}) => {
    return (
        <Modal
            animationType={'fade'}
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(!modalVisible)}
        >
            <View style={styles.modalContainer}>
                <TouchableOpacity style={styles.button} onPress={onPressShowAll}>
                    <Text style={styles.buttonText}>Show All</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    disabled={userLocation !== undefined}
                    style={styles.button}
                    onPress={onPressFilterByLocation}
                >
                    <Text style={styles.buttonText}>Filter By Location</Text>
                </TouchableOpacity>

            </View>
        </Modal>
    )
}

export default FilterModal