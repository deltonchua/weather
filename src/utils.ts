export const formatTime = (dt: Date) => {
  return `${dt.getDate()}-${dt.getMonth() + 1}-${dt.getFullYear()} ${
    dt.getHours() || 12
  }:${dt.getMinutes()}${dt.getHours() > 11 ? 'pm' : 'am'}`;
};
