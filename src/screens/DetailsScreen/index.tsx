import DetailsView from "./DetailsView";
import {FC, useState, useEffect} from "react";
import {Clinician} from "../../interfaces";
import {RouteProp, useRoute} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {cliniciansActions} from "../../redux/slices/cliniciansSlices";

type ParamList = {
    params: {
        clinician: Clinician
    }
}

const DetailsScreen: FC = () => {

    const {params: { clinician }} = useRoute<RouteProp<ParamList>>();

    const dispatch = useDispatch();

    const [isFavorite, setIsFavorite] = useState(false);

    const favoriteClinician = useSelector<RootState, Clinician | undefined>(state => {
        return state.clinicians.favoriteClinician ? state.clinicians.favoriteClinician : undefined;
    });

    useEffect(() => {
        if (favoriteClinician?.id === clinician.id) {
            setIsFavorite(true);
        }
        else {
            setIsFavorite(false);
        }
    },[favoriteClinician])

    const onPressSelectFavoriteClinician = () => {
        if (favoriteClinician?.id === clinician?.id) {
            dispatch(cliniciansActions.selectFavoriteClinician(undefined));
        } else {
            dispatch(cliniciansActions.selectFavoriteClinician(clinician));
        }
    };

    return (
      <DetailsView
          data={clinician}
          isFavourite={isFavorite}
          onPressSelectFavoriteClinician={onPressSelectFavoriteClinician}
      />
    )
}

export default DetailsScreen;