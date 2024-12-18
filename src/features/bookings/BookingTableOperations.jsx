import SortBy from "../../ui/SortBy";
import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";

function BookingTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="status"
        options={[
          { value: "all", label: "всі" },
          { value: "checked-out", label: "виїхав" },
          { value: "checked-in", label: "заїхав" },
          { value: "unconfirmed", label: "не підтверджені" },
        ]}
      />

      <SortBy
        options={[
          { value: "startDate-desc", label: "Сортування за датою (нещодавні)" },
          { value: "startDate-asc", label: "Сортування за датою (давні)" },
          {
            value: "totalPrice-desc",
            label: "Сортування за ціною (найбільша)",
          },
          { value: "totalPrice-asc", label: "Сортування за ціною (найменша)" },
        ]}
      />
    </TableOperations>
  );
}

export default BookingTableOperations;
