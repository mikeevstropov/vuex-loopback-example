import moment from 'moment/moment';

/**
 * ISO Date.
 *
 * @param {object} options
 * @return {string}
 */
export function isoDate({
  from,
  local,
  round,
} = {}) {

  let date = moment.parseZone(
    from || undefined,
  );

  switch (round) {

    case 'year':   date.set({month: 0});
    case 'month':  date.set({date: 1});
    case 'date':   date.set({hour: 0});
    case 'hour':   date.set({minute: 0});
    case 'minute': date.set({second: 0});
    case 'second': date.set({millisecond: 0});
  }

  let offset = 'Z';

  if (local)
    offset = moment.utc().utcOffset(
      new Date().getTimezoneOffset(),
    ).format('Z');

  return date.format(
    'YYYY-MM-DDTHH:mm:ss.SSS'
  ) + offset;
}

/**
 * Is Same Date.
 *
 * @param first
 * @param second
 * @param options
 * @return {boolean}
 */
export function isSameDate(
  first,
  second,
  {unit = 'day'} = {},
) {

  first = moment.utc(first);
  second = moment.utc(second);

  return first.isSame(second, unit)
}

/**
 * Human Date Range.
 *
 * @param first
 * @param second
 * @param options
 * @return {string}
 */
export function humanDateRange(
  first,
  second,
  {placeholder = ''} = {},
) {

  if (!first)
    return placeholder;

  const sameDay = isSameDate(
    first,
    second,
  );

  if (!second || sameDay)
    return moment
      .utc(first)
      .format('D MMMM YYYY');

  first = moment
    .utc(first)
    .format('D MMM');

  second = moment
    .utc(second)
    .format('D MMM YYYY');

  return `${first} - ${second}`;
}

/**
 * Human Date Time.
 *
 * @param date
 * @param placeholder
 * @return {string}
 */
export function humanDateTime(
  date,
  placeholder = '',
) {

  if (!date)
    return placeholder;

  return moment
    .utc(date)
    .format('D MMMM HH:mm');
}
