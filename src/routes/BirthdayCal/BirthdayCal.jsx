import React, { useState } from "react";

import { Box } from "@/UIComponents";
import { DAYS } from "@/constants/stringConstants";
import { SAMPLE_BIRTHDAYS } from "@/constants/sampleData";

import DayCard from "./components/DayCard";
import classes from "./BirthdayCal.module.scss";
import { TextArea, Select } from "@/UIComponents";
import {
  getCurrentYear,
  groupPeopleByBirthdayDay,
  getAllYearsTillCurrentYear,
} from "./utils/birthdayCalHelperFunctions";

const years = getAllYearsTillCurrentYear();
const yearsOptions = years.map(year => ({ value: year, label: year }));

const initialFormData = {
  usersJson: [],
  usersRawText: "",
  selectedYear: getCurrentYear(),
};

const BirthdayCal = () => {
  const [formData, setFormData] = useState(initialFormData);
  const { usersRawText, usersJson, selectedYear } = formData;

  const handleFormData = name => value => {
    setFormData({ ...formData, [name]: value });
  };

  const onCLickProcess = () => {
    handleFormData("usersJson")(JSON.parse(usersRawText.trim()));
  };

  const personsByBirthdayDay = groupPeopleByBirthdayDay({ users: usersJson, selectedYear });

  return (
    <div className={classes.pageContainer}>
      <Box className={classes.dayCardsContainer} isRowAligned={true}>
        {DAYS.map(day => {
          const cardTitle = day.slice(0, 3);
          const persons = personsByBirthdayDay[day] || [];
          return <DayCard key={day} title={cardTitle} persons={persons} />;
        })}
      </Box>

      <div className={classes.formContainer}>
        <TextArea
          name={"usersRawText"}
          value={usersRawText}
          placeholder="Paste users data"
          onChange={handleFormData("usersRawText")}
        />
        <Select
          value={selectedYear}
          options={yearsOptions}
          onChange={handleFormData("selectedYear")}
        />
        <button className={classes.goButton} onClick={onCLickProcess}>
          {"Process..!"}
        </button>
      </div>
    </div>
  );
};

export default BirthdayCal;
