export const formatTime = (dt: Date) => {
  const hours = dt.getHours();
  const minutes = dt.getMinutes().toString();
  return `${dt.getDate()}-${dt.getMonth() + 1}-${dt.getFullYear()} ${
    hours || 12
  }:${minutes.length > 1 ? minutes : '0' + minutes}${hours > 11 ? 'pm' : 'am'}`;
};
