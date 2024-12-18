import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { toast } from "react-hot-toast";

export function useCheckout() {
  const queryClient = useQueryClient();

  const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),

    onSuccess: (data) => {
      toast.success(`Бронювання #${data.id} успішно виписано`);
      queryClient.invalidateQueries({ active: true });
    },

    onError: () => toast.error("Сталася помилка під час виписки"),
  });

  return { checkout, isCheckingOut };
}
