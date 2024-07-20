import config from "./apiConfig";

const signUp = async (body) => {
  const res = await config.post("/signup", body);
  return res.data;
};
const signIn = async (body) => {
  const res = await config.post("/signin", body);
  return res.data;
};
export { signUp, signIn };
