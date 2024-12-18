import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

import { useUpdateUser } from "./useUpdateUser";

function UpdatePasswordForm() {
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;

  const { updateUser, isUpdating } = useUpdateUser();

  function onSubmit({ password }) {
    updateUser({ password }, { onSuccess: reset });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow
        label="Новий пароль (мінімум 8 символів)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          disabled={isUpdating}
          {...register("password", {
            required: "Заболронено",
            minLength: {
              value: 8,
              message: "Пароль повинен містити мінімум 8 символів",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Підтвердження пароля"
        error={errors?.passwordConfirm?.message}
      >
        <Input
          type="password"
          autoComplete="new-password"
          id="passwordConfirm"
          disabled={isUpdating}
          {...register("passwordConfirm", {
            required: "Заборонено",
            validate: (value) =>
              getValues().password === value || "Паролі не співпадають",
          })}
        />
      </FormRow>
      <FormRow>
        <Button onClick={reset} type="reset" variation="secondary">
          Відмінити
        </Button>
        <Button disabled={isUpdating}>Оновити пароль</Button>
      </FormRow>
    </Form>
  );
}

export default UpdatePasswordForm;
