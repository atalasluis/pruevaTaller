import { UserCreationObect } from "../Domain/User";
import { UserRepository } from "../Repositories/UserRepository";

export const registerUser = async (
  user: UserCreationObect,
  Adapter: UserRepository = new UserRepository()
) => {
  try {
    await Adapter.registerUser(user);
    return;
  } catch (error) {
    console.error("Error in the registration process:", error);
    return { error: "Error in the registration process" };
  }
};
