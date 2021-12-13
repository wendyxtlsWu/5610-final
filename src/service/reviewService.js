import {
    PETS_REVIEWS_API_URL,
    REVIEWS_API_URL,
    USERS_REVIEWS_API_URL
} from "../API/api";

export const findReviews = async() => {
    let response = await fetch(REVIEWS_API_URL);
    return await response.json()
};

export const findReviewsForPet = async (petId) => {
    let response = await fetch(PETS_REVIEWS_API_URL(petId))
    return await response.json()
};

export const createReview = async (petId, review) => {
    let response = await fetch(PETS_REVIEWS_API_URL(petId), {
        method: 'POST',
        body: JSON.stringify(review),
        headers: {
            'content-type': 'application/json'
        }
    })
    return await response.json()
};

export const findReviewsForUser = async (userId) => {
    let response = await fetch(USERS_REVIEWS_API_URL(userId))
    return await response.json();
    // return response.json()
}

export const updateReview = async (review) => {
    let response = await fetch(`${REVIEWS_API_URL}/${review.id}`, {
        method: 'PUT',
        body: JSON.stringify(review),
        headers: {
            "content-type": "application/json"
        }
    })
    return await response.json()
}

export const deleteReview = async (reviewId) => {
    let response = await fetch(`${REVIEWS_API_URL}/${reviewId}`, {
        method: 'DELETE'
    })
    return await response.json()
}

export const getRecentReviews = async () => {
    let response = await fetch(`${REVIEWS_API_URL}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    })
    return response.json()
}

export default {
    findReviews, createReview, findReviewsForPet, findReviewsForUser, deleteReview, getRecentReviews
}
