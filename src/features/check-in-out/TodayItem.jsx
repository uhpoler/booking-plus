import styled from "styled-components";
import { Link } from "react-router-dom";

import Tag from "../../ui/Tag";
import { Flag } from "../../ui/Flag";
import Button from "../../ui/Button";
import CheckoutButton from "./CheckoutButton";

const StyledTodayItem = styled.li`
  display: grid;
  grid-template-columns: 13rem 3rem 1fr 7rem 9rem;
  gap: 1.2rem;
  align-items: center;

  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }
`;

const Guest = styled.div`
  font-weight: 500;
`;
const CenteredColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

function TodayItem({ activity }) {
  const { id, status, guests, numNights } = activity;

  return (
    <StyledTodayItem>
      <CenteredColumn>
        {status === "unconfirmed" && <Tag type="blue">Прибуває</Tag>}
        {status === "checked-in" && <Tag type="yellow">Скоро поїде</Tag>}
      </CenteredColumn>

      <Flag src={guests.countryFlag} alt={`Прапор ${guests.country}`} />
      <Guest>{guests.fullName}</Guest>
      <div>{numNights} ночей</div>

      {status === "unconfirmed" && (
        <Button
          size="small"
          variation="primary"
          as={Link}
          to={`/checkin/${id}`}
        >
          Заїхав
        </Button>
      )}
      {status === "checked-in" && <CheckoutButton bookingId={id} />}
    </StyledTodayItem>
  );
}

export default TodayItem;
