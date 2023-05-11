import useAsync from '../useAsync';
import useToken from '../useToken';

import * as hotelApi from '../../services/hotelApi';

export default function useRoomsByHotelId(hotelId) {
  const token = useToken();

  const {
    data: roomsByHotelId,
    loading: roomsLoading,
    error: roomsError,
    act: getRoomsByHotelId,
  } = useAsync(() => hotelApi.getRoomsByHotelId(token, hotelId));

  return {
    roomsByHotelId,
    roomsLoading,
    roomsError,
    getRoomsByHotelId,
  };
}
