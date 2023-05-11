import useAsync from '../useAsync';
import useToken from '../useToken';

import * as hotelApi from '../../services/hotelApi';

export default function useHotel() {
  const token = useToken();

  const {
    data: hotels,
    loading: hotelstLoading,
    error: hotelsError,
    act: getHotels,
  } = useAsync(() => hotelApi.getHotels(token));

  return {
    hotels,
    hotelstLoading,
    hotelsError,
    getHotels,
  };
}
