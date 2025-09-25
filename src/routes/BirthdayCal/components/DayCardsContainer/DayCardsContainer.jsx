import React, { useMemo } from "react";

import { Box } from "@/UIComponents";
import { DAYS } from "@/constants/stringConstants";
import DayCard from "@BirthdayCal/components/DayCard";
import { groupPeopleByBirthdayDay } from "@BirthdayCal/utils/birthdayCalHelperFunctions";

import classes from "./DayCardsContainer.module.scss";

const getCardTitleFromDay = ({ day }) => day.slice(0, 3);

const DayCardsContainer = props => {
  const {
    processedData: { processedUsers, processedYear },
  } = props;

  const personsByBirthdayDay = useMemo(
    () => groupPeopleByBirthdayDay({ users: processedUsers, selectedYear: processedYear }),
    [processedUsers, processedYear]
  );

  const dayCards = useMemo(
    () =>
      DAYS.map(day => {
        const cardTitle = getCardTitleFromDay({ day });
        const persons = personsByBirthdayDay[day] || [];
        return { day, cardTitle, persons };
      }),
    [personsByBirthdayDay]
  );

  return (
    <Box className={classes.dayCardsContainer} isRowAligned={true}>
      {dayCards.map(({ day, cardTitle, persons }) => (
        <DayCard key={day} title={cardTitle} persons={persons} />
      ))}
    </Box>
  );
};

export default DayCardsContainer;
