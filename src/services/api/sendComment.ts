import instance from "./instance";

const sendComment = () => {
    const data = instance.post("/comments");
    return data;
};

export default sendComment;