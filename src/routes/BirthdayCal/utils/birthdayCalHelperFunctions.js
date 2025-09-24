import { DAYS } from "@/constants/stringConstants";

export const getBirthdayDayByYear = ({ birthdate, selectedYear }) => {
  const [day, month] = birthdate.split("/").map(str => Number(str));
  const date = new Date(selectedYear, month - 1, day);
  return DAYS[date.getDay()];
};

export const groupPeopleByBirthdayDay = ({ people = [], selectedYear }) => {
  if (!Array.isArray(people) || !selectedYear) return {};

  return people.reduce((acc, person) => {
    const { name, birthday } = person;
    if (!birthday || !name) return acc;
    try {
      const dayName = getBirthdayDayByYear({ birthdate: birthday, selectedYear });
      if (acc[dayName]) acc = { ...acc, [dayName]: [...acc[dayName], person] };
      else acc[dayName] = [person];
    } catch (error) {
      console.warn(`Invalid birthday date for ${name}: ${birthday}`);
    }
    return acc;
  }, {});
};
