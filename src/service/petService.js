import {API_KEY, petFinderClient, PETS_PROFILE_API_URL, PUBLIC_API} from "../API/api";

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


export const searchPets = async (search) => {
    let searchParams = {limit:100}
    // {
    //     type: search.type,
    //     name: search.name,
    //     size: search.size,
    //     age: search.age,
    //     gender: search.gender,
    //     limit: 100,
    // }

    for (const prop in search){
        if (search[prop] !== ''){
            searchParams[prop] = search[prop]
        }
    }
    console.log("searchParams", searchParams)

    let apiResult = await petFinderClient.animal.search(searchParams)
        .catch(err => {
        console.log(err.request, err.response, err.invalidParams);
        // check errors
        })
    // console.log("apiResult", apiResult)
    return apiResult.data
};



export default {
    findDetailById, findLocalDetailById, searchPets
}
