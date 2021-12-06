import {
    API_KEY,
    PUBLIC_SERVER_URL,
    BUSINESSES_API_URL,
    OWNERS_BUSINESSES_API_URL,
    PETS_APPLICATIONS_API_URL,
    APPLICATIONS_API_URL,
    USERS_REVIEWS_API_URL
} from "../API/api";



export const findApplications = async() => {
    let response = await fetch(APPLICATIONS_API_URL);
    return await response.json()
};

// export const findApplicationsForBusiness = async (businessId) => {
//     let response = await fetch(BUSINESSES_REVIEWS_API_URL(businessId))
//     return await response.json()
// };
//
export const createApplication = async (petId, application) => {
    let response = await fetch(PETS_APPLICATIONS_API_URL(petId), {
        method: 'POST',
        body: JSON.stringify(application),
        headers: {
            'content-type': 'application/json'
        }
    })
    return await response.json()
};
//
// export const findReviewsForUser = async (userId) => {
//     let response = await fetch(USERS_REVIEWS_API_URL(userId))
//     return await response.json()
// }
//
//
// export const deleteReview = async (reviewId) => {
//     let response = await fetch(`${REVIEWS_API_URL}/${reviewId}`, {
//         method: 'DELETE'
//     })
//     return await response.json()
// }
//
// export const getRecentReviews = async () => {
//     let response = await fetch(`${REVIEWS_API_URL}`, {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/json'
//         }
//     })
//     return response.json()
// }

export default {
    findApplications, createApplication
}
