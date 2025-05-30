import api from "@/lib/api/axios";

export const loginService = async (data: any) => {    
  const response = await api.post("sign-in/", data);

  return {
    user: response.data.user,
    token: response.data.access_token,
  };
};
