/* eslint-disable no-unused-vars */
import styled from "styled-components";
import BookingDataBox from "../../features/bookings/BookingDataBox";

import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "../bookings/useBooking";
import Checkbox from "../../ui/Checkbox";
import { useEffect, useState } from "react";
import Spinner from "../../ui/Spinner";
import { formatCurrency } from "../../utils/helpers";
import { useGetSetting } from "../settings/useGetSetting";
import { useChecking } from "./useChecking";

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckinBooking() {
  const { booking, isLoading } = useBooking();
  const { getSetting, isLoading: isLoadingSetting } = useGetSetting();
  const { checkin, isCkeckingIn } = useChecking();
  const [confirmPaid, setConfirmPaid] = useState(false);
  const [addBreakfast, setAddBreakfast] = useState(false);

  useEffect(() => {
    setConfirmPaid(booking?.isPaid ?? false);
  }, [booking]);
  const moveBack = useMoveBack();
  if (isLoading || isLoadingSetting) return <Spinner />;

  const {
    id: bookingId,
    guest,
    totalPrice,
    numGuests,
    hasBreakFast,
    numNights,
  } = booking;
  const optionalBreakfastPrice =
    getSetting.breakfastPrice * numNights * numGuests;

  function handleCheckin() {
    if (!confirmPaid) return;
    if (addBreakfast) {
      checkin({
        bookingId,
        breakfast: {
          hasBreakFast: true,
          extraPrice: optionalBreakfastPrice,
          totalPrice: optionalBreakfastPrice + totalPrice,
        },
      });
    } else {
      checkin({ bookingId, breakfast: {} });
    }
  }

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      {!hasBreakFast && (
        <Box>
          <Checkbox
            checked={addBreakfast}
            onChange={() => {
              setAddBreakfast((add) => !add);
              setConfirmPaid(false);
            }}
            id="breakfast"
          >
            Want to add breakfast for {formatCurrency(optionalBreakfastPrice)}!
          </Checkbox>
        </Box>
      )}

      <Box>
        <Checkbox
          checked={confirmPaid}
          onChange={() => setConfirmPaid((confirm) => !confirm)}
          disabled={confirmPaid}
        >
          i confirmed that {guest.fullName} has paid the total amount of{" "}
          {!addBreakfast
            ? formatCurrency(totalPrice)
            : `${formatCurrency(
                totalPrice + optionalBreakfastPrice
              )} (${formatCurrency(totalPrice)}+${formatCurrency(
                optionalBreakfastPrice
              )})`}
        </Checkbox>
      </Box>

      <ButtonGroup>
        <Button onClick={handleCheckin} disabled={!confirmPaid}>
          Check in booking #{bookingId}
        </Button>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckinBooking;
