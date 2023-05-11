import api from './api';

export async function getBookedRooms(token) {
  const response = await api.get('/booking/all', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
