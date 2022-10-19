export function dateDiffInDays(a, b) {
  const _MS_PER_DAY = 1000;
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(
    a.getFullYear(),
    a.getMonth(),
    a.getDate(),
    a.getHours(),
    a.getMinutes(),
    a.getSeconds()
  );
  const utc2 = Date.UTC(
    b.getFullYear(),
    b.getMonth(),
    b.getDate(),
    b.getHours(),
    b.getMinutes(),
    b.getSeconds()
  );
  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}
