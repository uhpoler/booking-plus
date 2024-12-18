import Filter from "../../ui/Filter";

function DashboardFilter() {
  return (
    <Filter
      filterField="last"
      options={[
        { value: "7", label: "Останні 7 днів" },
        { value: "30", label: "Останні 30 днів" },
        { value: "90", label: "Останні 90 днів" },
      ]}
    />
  );
}

export default DashboardFilter;
