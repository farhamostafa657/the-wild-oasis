import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings.js";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  const queryClient = useQueryClient();
  const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: deleteBookingApi,
    onSuccess: () => {
      toast.success("booking deleted succussfly");
      queryClient.invalidateQueries({
        queryKey: ["bookings"],
      });
    },
    onError: (error) => toast.error(error.message),
  });
  return { isDeleting, deleteBooking };
}
