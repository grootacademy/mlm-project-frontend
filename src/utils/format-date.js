// eslint-disable-next-line import/no-extraneous-dependencies
import { DateTime } from 'luxon';

export function formatDate(date) {

    const formattedDateTime = DateTime.fromISO(date, { zone: 'Asia/Kolkata' })
        .toLocaleString(DateTime.DATETIME_MED);
    return formattedDateTime;
}