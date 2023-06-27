import instance from "./instance";

const users = () => {
    const data = instance.get("/users");
    return data;
};

export default users;