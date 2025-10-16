export interface HistoryFilters {
  page: number;
  provider: string;
  status: string;
  type: string;
}

export const getFiltersFromURL = (): HistoryFilters => {
  const urlParams = new URLSearchParams(window.location.search);
  return {
    page: parseInt(urlParams.get('page') || '1'),
    provider: urlParams.get('provider') || 'all',
    status: urlParams.get('status') || 'all',
    type: urlParams.get('type') || 'all',
  };
};

export const updateURLWithFilters = (filters: HistoryFilters): void => {
  const params = new URLSearchParams();

  if (filters.page > 1) {
    params.set('page', filters.page.toString());
  }
  if (filters.provider !== 'all') {
    params.set('provider', filters.provider);
  }
  if (filters.status !== 'all') {
    params.set('status', filters.status);
  }
  if (filters.type !== 'all') {
    params.set('type', filters.type);
  }

  const queryString = params.toString();
  const newURL = queryString
    ? `${window.location.pathname}?${queryString}`
    : window.location.pathname;

  window.history.pushState({}, '', newURL);
};
export const getQueryStringForAPI = (filters: HistoryFilters): string => {
  const params = new URLSearchParams();

  params.set('page', filters.page.toString());
  if (filters.provider !== 'all') {
    params.set('provider', filters.provider);
  }
  if (filters.status !== 'all') {
    params.set('status', filters.status);
  }
  if (filters.type !== 'all') {
    params.set('type', filters.type);
  }

  return params.toString();
};
