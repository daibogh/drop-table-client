import { useLocation, useHistory } from 'react-router-dom';
import { stringify } from 'query-string';
import { useCallback } from 'react';

import { useLocationParams } from 'core/router';

export function useChangeLocationParams() {
  const history = useHistory();
  const params = useLocationParams();
  const location = useLocation();

  return useCallback(
    (key: string, value: number) => {
      history.push({
        ...location,
        search: stringify({ ...params, [key]: value }),
      });
    },
    [history, location, params]
  );
}
