import React from "react";

import { Box } from "@/UIComponents";
import DayCard from "./components/DayCard";
import { DAYS } from "@/constants/stringConstants";
import { SAMPLE_BIRTHDAYS } from "@/constants/sampleData";

import classes from "./BirthdayCal.module.scss";
import { groupPeopleByBirthdayDay } from "./utils/birthdayCalHelperFunctions";

const personsByBirthdayDay = groupPeopleByBirthdayDay({
  people: SAMPLE_BIRTHDAYS,
  selectedYear: 2025,
});

const BirthdayCal = () => {
  return (
    <div className={classes.pageContainer}>
      <Box className={classes.dayCardsContainer} isRowAligned={true}>
        {DAYS.map(day => {
          const cardTitle = day.slice(0, 3);
          const persons = personsByBirthdayDay[day] || [];
          return <DayCard key={day} title={cardTitle} persons={persons} />;
        })}
      </Box>
    </div>
  );
};

export default BirthdayCal;
