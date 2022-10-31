import {cliniciansReducer} from './cliniciansSlices';
import {authReducer} from "./authSlice";

const reducer = {
    clinicians: cliniciansReducer,
    auth: authReducer,
}

export default reducer;