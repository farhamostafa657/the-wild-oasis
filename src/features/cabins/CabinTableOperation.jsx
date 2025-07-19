import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function CabinTableOberation() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No discount" },
          { value: "with-discount", label: "With discount" },
        ]}
      />
      <SortBy
        options={[
          { value: "name-asc", label: "Sort By Name (A-Z)" },
          { value: "name-dec", label: "Sort By Name (Z-A)" },
          { value: "regularPrice-asc", label: "Sort By price (low first)" },
          { value: "regularPrice-desc", label: "Sort By price (high first)" },
          { value: "maxCapacity-asc", label: "Sort By capacity (low first)" },
          { value: "maxCapacity-desc", label: "Sort By capacity (high first)" },
        ]}
      ></SortBy>
    </TableOperations>
  );
}

export default CabinTableOberation;
