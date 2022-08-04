import { Api } from "./api";

export async function loginService(email: string, password: string) {
  try {
    const request = await Api.post("auth/login", {
      email,
      password,
    });

    return request.data;
  } catch (error) {
    return null;
  }
}
