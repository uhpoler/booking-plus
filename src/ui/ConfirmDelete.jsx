import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";

const StyledConfirmDelete = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

function ConfirmDelete({
  resourceName,
  onConfirm,
  disabled,
  onCloseModal,
  name,
}) {
  return (
    <StyledConfirmDelete>
      <Heading as="h2">
        Видалення {name} {resourceName}
      </Heading>
      <p>
        Ви впевнені, що хочете видалити {name} {resourceName} назавжди? Цю дію
        неможливо буде відмінити
      </p>

      <div>
        <Button
          variation="secondary"
          disabled={disabled}
          onClick={onCloseModal}
        >
          Відмінити
        </Button>
        <Button variation="danger" disabled={disabled} onClick={onConfirm}>
          Видалити
        </Button>
      </div>
    </StyledConfirmDelete>
  );
}

export default ConfirmDelete;
