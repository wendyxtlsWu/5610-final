import {API_KEY, PUBLIC_API, PETS_PROFILE_API_URL} from "../API/api";

export const findDetailById = async (id, accessToken) => {
    let response = await fetch(`${PUBLIC_API}/animals/${id}`, {
        method: 'GET',
        headers: {
            'ContentType': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
        }
    })
    return response.json();
};

export const findLocalDetailById = async (petId) => {
    let response = await fetch(PETS_PROFILE_API_URL(petId))
    return await response.json()
};



export default {
    findDetailById, findLocalDetailById
}
