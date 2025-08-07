import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export const useCheckOut = () => {
  const queryClient = useQueryClient();

  const { mutate: checkOut, isLoading: isCkeckingOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checked in`);
      queryClient.invalidateQueries({ active: true });
    },
    onError: () => toast.error("there was an error while checking in"),
  });
  return { checkOut, isCkeckingOut };
};
