import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import AddCabin from "../features/cabins/AddCabin";
import CabinTableOberation from "../features/cabins/CabinTableOperation";

function Cabins() {
  return (
    <>
      <Row type="horizental">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOberation />
      </Row>
      <Row>
        <CabinTable />
      </Row>
      <AddCabin />
    </>
  );
}

export default Cabins;
