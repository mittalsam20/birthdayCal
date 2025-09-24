import { DAYS, START_YEAR } from "@/constants/stringConstants";

export const getCurrentYear = () => {
  return new Date().getFullYear();
};

export const getBirthdayDayByYear = ({ birthdate, selectedYear }) => {
  const [day, month] = birthdate.split("/").map(str => Number(str));
  const date = new Date(selectedYear, month - 1, day);
  return DAYS[date.getDay()];
};

export const groupPeopleByBirthdayDay = ({ users = [], selectedYear }) => {
  if (!Array.isArray(users) || !selectedYear) return {};
  return users.reduce((acc, person) => {
    const { name, birthday } = person;
    if (!birthday || !name) return acc;
    try {
      const dayName = getBirthdayDayByYear({ birthdate: birthday, selectedYear });
      if (acc[dayName]) acc = { ...acc, [dayName]: [...acc[dayName], person] };
      else acc[dayName] = [person];
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      console.warn(`Invalid birthday date for ${name}: ${birthday}`);
    }
    return acc;
  }, {});
};

export const getAllYearsTillCurrentYear = () => {
  let years = [];
  const currentYear = getCurrentYear();
  for (let year = START_YEAR; year <= currentYear; year++) years = [...years, year];
  return years;
};

export const getYearsOptions = ({ years }) => {
  const yearsOptions = years.map(year => ({ value: year, label: year }));
  return yearsOptions;
};
