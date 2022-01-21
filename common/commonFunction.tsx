export function toDateTime(secs: number): string {
  var date = new Date(null);
  date.setSeconds(secs);
  return date.toISOString().substr(0, 10);
}
