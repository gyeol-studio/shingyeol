import { Solar, Lunar } from 'lunar-javascript';

export interface CalendarDate {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
}

/**
 * 음력을 양력으로 변환
 */
export function lunarToSolar(lunar: CalendarDate): CalendarDate {
  const lunarDate = Lunar.fromYmdHms(
    lunar.year,
    lunar.month,
    lunar.day,
    lunar.hour,
    lunar.minute,
    0
  );

  const solar = lunarDate.getSolar();

  return {
    year: solar.getYear(),
    month: solar.getMonth(),
    day: solar.getDay(),
    hour: solar.getHour(),
    minute: solar.getMinute(),
  };
}

/**
 * 양력을 음력으로 변환
 */
export function solarToLunar(solar: CalendarDate): CalendarDate {
  const solarDate = Solar.fromYmdHms(
    solar.year,
    solar.month,
    solar.day,
    solar.hour,
    solar.minute,
    0
  );

  const lunar = solarDate.getLunar();

  return {
    year: lunar.getYear(),
    month: lunar.getMonth(),
    day: lunar.getDay(),
    hour: lunar.getHour(),
    minute: lunar.getMinute(),
  };
}

/**
 * 입력된 날짜를 양력으로 정규화
 */
export function normalizeToSolar(date: CalendarDate, isLunar: boolean): CalendarDate {
  return isLunar ? lunarToSolar(date) : date;
}
