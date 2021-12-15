import {petFinderClient, SERVER_URL} from "../API/api";

// export const findDetailById = async (id, accessToken) => {
//     let response = await fetch(`${PUBLIC_API}/animals/${id}`, {
//         method: 'GET',
//         headers: {
//             'ContentType': 'application/json',
//             'Authorization': `Bearer ${accessToken}`,
//         }
//     })
//     return response.json();
// };

export const findDetailById = async (id) => {
    let pet = await petFinderClient.animal.show(id);
    // console.log("pet", pet)
    return pet;
}

// export const findLocalDetailById = async (petId) => {
//     let response = await fetch(PETS_PROFILE_API_URL(petId))
//     return await response.json()
// };

export const searchPets = async (search) => {
    // console.log("service", search)
    // without using "await", promise type result will be returned
    // An async function consists of two main keywords async and await. They keyword async is used to make a function asynchronous.
    // The await keyword will ask the execution to wait until the defined task gets executed
    let localResult = await searchLocalPets(search)
    let remoteResult = await searchRemotePets(search)
    // console.log("local", localResult)
    // console.log("remote", remoteResult)
    // return [].concat(localResult, remoteResult)
    return {
        local:localResult,
        remote: remoteResult}

    }



// search local db for targeted pets
const searchLocalPets =  async (searchParams) => {
    // await fetch(`${SERVER_URL}/search/pets`,{
    //     method: 'POST',
    //         body: JSON.stringify(searchParams),
    //         headers: {
    //         'content-type': 'application/json'
    //         },
    //         // credentials: "include"
    // }).then(response => {
    //     if (response.ok) {
    //         let result = response.json()
    //         console.log("xxx", result)
    //         return result
    //     } else {
    //         console.log(response)
    //     }
    // })

    let response = await fetch(`${SERVER_URL}/search/pets`,{
        method: 'POST',
        body: JSON.stringify(searchParams),
        headers: {
            'content-type': 'application/json'
        },
        // credentials: "include"
    })
    if (response.ok) {
        return response.json()
    } else {
      console.log(response)
    }
}
// search remote API for pets
const searchRemotePets = async (search) => {
    // console.log("searchParams", searchParams)
    let searchParams = {limit:100}
    // only search remote API with non-empty filter params
    for (const prop in search){
        if (search[prop] !== '' && search[prop] !== undefined){
            searchParams[prop] = search[prop]
        }
    }
    let apiResult = await petFinderClient.animal.search(searchParams)
        .catch(err => {
        console.log(err.request, err.response, err.invalidParams);
        // check errors
        })
    // console.log("apiResult", apiResult)
    // console.log("animals", apiResult.data.animals)
     // apiResult.data.animals : animals meet requirements
    return apiResult.data.animals
};



export default {
    findDetailById, searchPets
}
