export const checkFilled = (title?: string, description?: string): boolean => {
  if (title?.length === 0) return false;
  if (title === undefined) return false;
  if (description?.length === 0) return false;
  if (description === undefined) return false;
  else return true;
};
