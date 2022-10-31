export interface Clinician {
    id: string,
    firstName: string,
    lastName: string,
    fullName: string,
    imageUrl: string,
    bio: string,
    email: string,
    phone: string,
    location: string,
}

export interface AuthState {
    isLogged: boolean,
}

export interface CliniciansState {
    isLoaded: boolean,
    data: Clinician[],
    favoriteClinician: Clinician | undefined,
}

export interface UserLocation {
    coords: {
        accuracy: number,
        altitude: number,
        altitudeAccuracy: number,
        heading: number,
        latitude: number,
        longitude: number,
        speed: number,
    },
    timestamp: number,
}