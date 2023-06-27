import instance from "./instance";
import { AxiosResponse } from "axios";
import { UsersPropsType } from "../../components/users";

const users = () => {
  const data = instance.get<AxiosResponse<UsersPropsType>>("/users");
  return data;
};

export default users;
