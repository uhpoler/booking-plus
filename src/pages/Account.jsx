import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Account() {
  return (
    <>
      <Heading as="h1">Оновити свій акаунт</Heading>

      <Row>
        <UpdateUserDataForm />
      </Row>

      <Row>
        <UpdatePasswordForm />
      </Row>
    </>
  );
}

export default Account;
