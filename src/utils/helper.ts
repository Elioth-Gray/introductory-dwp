export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price);
};

export const getInitials = (name: string) => {
  return name
    .split(' ')
    .map((word) => word.charAt(0))
    .join('')
    .toUpperCase()
    .slice(0, 2);
};

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('id-ID', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(amount);
};

export const getProviderDisplayName = (provider: string) => {
  const providerNames: { [key: string]: string } = {
    telkomsel: 'Telkomsel',
    indosat: 'Indosat',
    'xl-axiata': 'XL Axiata',
    smartfren: 'Smartfren',
    'by-u': 'By-U',
    im3: 'IM3',
  };
  return providerNames[provider] || provider;
};

export const getStatusDisplayName = (status: string) => {
  const statusNames: { [key: string]: string } = {
    completed: 'Berhasil',
    pending: 'Menunggu',
    failed: 'Gagal',
  };
  return statusNames[status] || status;
};

export const getTypeDisplayName = (type: string) => {
  const typeNames: { [key: string]: string } = {
    credit: 'Pulsa',
    packet_data: 'Paket Data',
  };
  return typeNames[type] || type;
};
