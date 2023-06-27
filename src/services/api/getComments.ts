import instance from "./instance";

const getComments = () => {
    const data = instance.get("/comments");
    return data;
};

export default getComments;