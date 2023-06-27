import instance from "./instance";

const posts = () => {
    const data = instance.get("/posts");
    return data;
};

export default posts;