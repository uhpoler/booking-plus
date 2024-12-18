import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";

import { useCreateCabin } from "./useCreateCabin";
import { useEditCabin } from "./useEditCabin";

function CreateCabinForm({ cabinToEdit = {}, onCloseModal }) {
  const { isCreating, createCabin } = useCreateCabin();
  const { isEditing, editCabin } = useEditCabin();
  const isWorking = isCreating || isEditing;

  const { id: editId, ...editValues } = cabinToEdit;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;

  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];

    if (isEditSession)
      editCabin(
        { newCabinData: { ...data, image }, id: editId },
        {
          /*eslint-disable*/
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        }
      );
    else
      createCabin(
        { ...data, image: image },
        {
          /*eslint-disable*/
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        }
      );
  }
  /*eslint-disable*/
  function onError(errors) {
    // console.log(errors);
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow label="Назва номеру" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isWorking}
          {...register("name", {
            required: "Ця назва заборонена",
          })}
        />
      </FormRow>

      <FormRow
        label="Максимальна місткість"
        error={errors?.maxCapacity?.message}
      >
        <Input
          type="number"
          id="maxCapacity"
          disabled={isWorking}
          {...register("maxCapacity", {
            required: "Заборонено",
            min: {
              value: 1,
              message: "Має бути щонайменше одна людина",
            },
          })}
        />
      </FormRow>

      <FormRow label="Ціна" error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          disabled={isWorking}
          {...register("regularPrice", {
            required: "Заборонено",
            min: {
              value: 1,
              message: "Ціна має бути щонайменше 1 грн",
            },
          })}
        />
      </FormRow>

      <FormRow label="Знижка" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          disabled={isWorking}
          defaultValue={0}
          {...register("discount", {
            required: "Заборонено",
            validate: (value) =>
              value <= getValues().regularPrice ||
              "Знижка має бути менша за ціну",
          })}
        />
      </FormRow>

      <FormRow label="Опис" error={errors?.description?.message}>
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          disabled={isWorking}
          {...register("description", {
            required: "Заборонено",
          })}
        />
      </FormRow>

      <FormRow label="Фото номеру">
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", {
            required: isEditSession ? false : "Заборонено",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Відмінити
        </Button>
        <Button disabled={isWorking}>
          {isEditSession
            ? "Змінити інформацію про номер"
            : "Створити новий номер"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
