import * as petfinder from "@petfinder/petfinder-js";

export const SERVER_URL = "http://localhost:8080";
export const PUBLIC_API = "https://api.petfinder.com/v2";
export const PETS_REVIEWS_API_URL = (petId) => `http://127.0.0.1:8080/api/pets/${petId}/reviews`
export const REVIEWS_API_URL = "http://localhost:8080/api/reviews"
export const USERS_REVIEWS_API_URL = (userId) => `http://localhost:8080/api/users/${userId}/reviews`
export const APPLICATIONS_API_URL = "http://localhost:8080/api/applications"
export const PETS_APPLICATIONS_API_URL = (petId) => `http://127.0.0.1:8080/api/pets/${petId}/applications`
export const API_KEY = "o6LWEOD8C371Cu7z6L5qGUc0y3Pg4cRMRfaWnEA80LdI2xMfEc"
export const API_SECRET_KEY = "F8d9f4p7BvrqGLxMcGoRLqLdbMCJbOlVwTCcbrMv"
export const PETPROFILES_API_URL = "http://localhost:8080/api/petProfiles"
// export const PETS_PROFILE_API_URL = "http://localhost:8080/api/pets/${petId}/petProfile"
export const USERS_APPLICATIONS_API_URL = (userId) => `http://localhost:8080/api/users/${userId}/applications`
export const petFinderClient = new petfinder.Client({ apiKey: "o6LWEOD8C371Cu7z6L5qGUc0y3Pg4cRMRfaWnEA80LdI2xMfEc", secret: "F8d9f4p7BvrqGLxMcGoRLqLdbMCJbOlVwTCcbrMv" })