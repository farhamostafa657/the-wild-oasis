import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add New Cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

// function AddCabin() {
//   const [IsOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       <Button onClick={() => setIsOpen((show) => !show)}>Add New Cabin</Button>
//       {IsOpen && (
//         <Modal onClose={() => setIsOpen(false)}>
//           <CreateCabinForm onCloseModal={() => setIsOpen(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddCabin;
