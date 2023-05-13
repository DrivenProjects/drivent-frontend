import useAsync from '../useAsync';
import useToken from '../useToken';

import * as bookingApi from '../../services/bookingApi';

export default function useRoomsBooked() {
  const token = useToken();

  const {
    data: roomsBooked,
    loading: roomsBookedLoading,
    error: roomsBookedError,
    act: getRoomsBooked,
  } = useAsync(() => bookingApi.getBookedRooms(token));

  return {
    roomsBooked,
    roomsBookedLoading,
    roomsBookedError,
    getRoomsBooked,
  };
}
