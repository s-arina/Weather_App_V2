import React from 'react';

export function getWeekday(day) {
  const [yyyy, mm, dd] = day.split('-'),
    date = new Date(yyyy, mm - 1, dd);
  return date.toLocaleDateString('en-US', { weekday: 'long' });
}

export function formatDate(date) {
  let tempDate = [...date];
  let day = tempDate.slice(8);
  let month = tempDate.slice(5, 7);
  let newDate = `${month} / ${day}`;
  return newDate
    .replace(/(^|-)0+/g, '$1')
    .split(',')
    .join('');
}
