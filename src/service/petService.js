import {API_KEY, PUBLIC_API, PETS_PROFILE_API_URL} from "../API/api";

export const findDetailById = async (id) => {
    let response = await fetch(`${PUBLIC_API}/animals/${id}`, {
        method: 'GET',
        headers: {
            'ContentType': 'application/json',
            'Authorization': `Bearer ${API_KEY}`,
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
