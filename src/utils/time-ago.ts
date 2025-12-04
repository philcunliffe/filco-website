export function timeAgo(time: Date | string | number | undefined): string {
  if (!time) return '';

  let timestamp: number;

  switch (typeof time) {
    case 'number':
      timestamp = time;
      break;
    case 'string':
      timestamp = +new Date(time);
      break;
    case 'object':
      if (time instanceof Date) {
        timestamp = time.getTime();
      } else {
        timestamp = +new Date();
      }
      break;
    default:
      timestamp = +new Date();
  }

  const timeFormats: [number, string, number | string][] = [
    [60, 'seconds', 1],
    [120, '1 minute ago', '1 minute from now'],
    [3600, 'minutes', 60],
    [7200, '1 hour ago', '1 hour from now'],
    [86400, 'hours', 3600],
    [172800, 'Yesterday', 'Tomorrow'],
    [604800, 'days', 86400],
    [1209600, 'Last week', 'Next week'],
    [2419200, 'weeks', 604800],
    [4838400, 'Last month', 'Next month'],
    [29030400, 'months', 2419200],
    [58060800, 'Last year', 'Next year'],
    [2903040000, 'years', 29030400],
    [5806080000, 'Last century', 'Next century'],
    [58060800000, 'centuries', 2903040000],
  ];

  let seconds = (+new Date() - timestamp) / 1000;
  let token = 'ago';
  let listChoice = 1;

  if (seconds === 0) {
    return 'Just now';
  }

  if (seconds < 0) {
    seconds = Math.abs(seconds);
    token = 'from now';
    listChoice = 2;
  }

  for (const format of timeFormats) {
    if (seconds < format[0]) {
      if (typeof format[2] === 'string') {
        return format[listChoice] as string;
      }
      return `${Math.floor(seconds / format[2])} ${format[1]} ${token}`;
    }
  }

  return String(timestamp);
}
