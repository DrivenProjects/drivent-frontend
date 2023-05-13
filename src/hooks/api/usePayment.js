import useAsync from '../useAsync';

import * as paymentApi from '../../services/paymentApi';

export default function usePay() {
  const {
    loading: payLoading,
    error: payError,
    act: pay,
  } = useAsync(paymentApi.pay, false);

  return {
    payLoading,
    payError,
    pay,
  };
}
