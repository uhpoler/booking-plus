import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import { toast } from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    /*eslint-disable*/
    onSuccess: (user) => {
      toast.success(
        "Акаунт успішно створено! Будь ласка, підтвердіть новий акаунт за допомогою електронної пошти користувача."
      );
    },
  });

  return { signup, isLoading };
}
