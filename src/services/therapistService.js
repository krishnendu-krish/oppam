import api from "./api";

export const getTherapists = async () => {

    const response = await api.get(
        "/therapists/"
    );

    return response.data;

};


export const getTherapist = async (id) => {

    const response = await api.get(
        `/therapists/${id}/`
    );

    return response.data;

};