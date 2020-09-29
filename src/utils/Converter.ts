import { format } from 'date-fns';

export function kelvinToCelcius<Number>(kelvin: number, fixed = 1) {
  const result = (kelvin - 273.15).toFixed(fixed);

  return result;
}

export function normalizeDate<Number>(unixtimestamp: number) {
  const date = format(new Date(unixtimestamp * 1000), 'dd/MM/yy') //.toLocaleDateString();

  return date;
}
