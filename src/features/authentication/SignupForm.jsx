import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSignup } from "./useSignup";

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const { signup, isLoading } = useSignup();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ fullName, email, password }) {
    signup(
      { fullName, email, password },
      {
        onSettled: () => reset(),
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Повне ім'я" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          disabled={isLoading}
          {...register("fullName", { required: "Заборонено" })}
        />
      </FormRow>

      <FormRow label="Email адреса" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          disabled={isLoading}
          {...register("email", {
            required: "Заборонено",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Будь ласка, надай правильний email",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Пароль (мінімум 8 символів)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          disabled={isLoading}
          {...register("password", {
            required: "Заюоронено",
            minLength: {
              value: 8,
              message: "Пароль повинен містити  needs мінімум 8 символів",
            },
          })}
        />
      </FormRow>

      <FormRow label="Повтори пароль" error={errors?.passwordConfirm?.message}>
        <Input
          type="password"
          id="passwordConfirm"
          disabled={isLoading}
          {...register("passwordConfirm", {
            required: "Заборонено",
            validate: (value) =>
              value === getValues().password || "Паролі мають  співпадати ",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation="secondary"
          type="reset"
          disabled={isLoading}
          onClick={reset}
        >
          Відмінити
        </Button>
        <Button disabled={isLoading}>Створити нового юзера</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
