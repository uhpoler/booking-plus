import { HiOutlineBriefcase, HiOutlineCalendarDays } from "react-icons/hi2";
import Stat from "./Stat";

function Stats({ bookings, confirmedStays }) {
  // 1.
  const numBookings = bookings.length;

  // 2.
  const checkins = confirmedStays.length;

  return (
    <>
      <Stat
        title="Бронювання"
        color="yellow"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />

      <Stat
        title="Заїзди"
        color="green"
        icon={<HiOutlineCalendarDays />}
        value={checkins}
      />
    </>
  );
}

export default Stats;
