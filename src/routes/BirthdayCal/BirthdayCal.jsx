import React, { useState } from "react";

import { Box } from "@/UIComponents";
import { DAYS, MOCK_BIRTHDAYS_DATA } from "@/constants/stringConstants";

import {
  getCurrentYear,
  getYearsOptions,
  groupPeopleByBirthdayDay,
  getAllYearsTillCurrentYear,
} from "./utils/birthdayCalHelperFunctions";
import DayCard from "./components/DayCard";
import classes from "./BirthdayCal.module.scss";
import { TextArea, Select } from "@/UIComponents";

const getCardTitleFromDay = ({ day }) => {
  return day.slice(0, 3);
};

const currentYear = getCurrentYear();
const years = getAllYearsTillCurrentYear();
const yearsOptions = getYearsOptions({ years });
const initialFormData = {
  selectedYear: currentYear,
  usersRawText: JSON.stringify(MOCK_BIRTHDAYS_DATA),
};

const initialProcessedData = {
  selectedYear: currentYear,
  usersJson: MOCK_BIRTHDAYS_DATA,
};

const BirthdayCal = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [processedData, setProcessedData] = useState(initialProcessedData);

  const { usersRawText, selectedYear } = formData;
  const { usersJson, selectedYear: processedYear } = processedData;

  const handleFormData = name => value => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const onClickProcess = () => {
    try {
      const parsedUsers = JSON.parse(usersRawText.trim());
      setProcessedData({ usersJson: parsedUsers, selectedYear });
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      alert("Invalid JSON format");
    }
  };

  const personsByBirthdayDay = groupPeopleByBirthdayDay({
    users: usersJson,
    selectedYear: processedYear,
  });

  return (
    <div className={classes.pageContainer}>
      <Box className={classes.dayCardsContainer} isRowAligned={true}>
        {DAYS.map(day => {
          const cardTitle = getCardTitleFromDay({ day });
          const persons = personsByBirthdayDay[day] || [];
          return <DayCard key={day} title={cardTitle} persons={persons} />;
        })}
      </Box>

      <div className={classes.formContainer}>
        <TextArea
          name={"usersRawText"}
          value={usersRawText}
          placeholder={"Paste users data"}
          onChange={handleFormData("usersRawText")}
        />
        <Select
          value={selectedYear}
          options={yearsOptions}
          onChange={handleFormData("selectedYear")}
        />
        <button className={classes.startProcessingButton} onClick={onClickProcess}>
          {"Process..!"}
        </button>
      </div>
    </div>
  );
};

export default BirthdayCal;
