export const dateFromStringToDate = (dateString: string): Date => {
  // dateString === '28/05/2018'
  const dateParts = dateString
    .split('/')
    .map((item: string): number => parseInt(item));
  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
