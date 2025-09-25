import React, { useState, useCallback } from "react";

import { TextArea, Select } from "@/UIComponents";
import { MOCK_BIRTHDAYS_DATA } from "@/constants/stringConstants";

import {
  getCurrentYear,
  getYearsOptions,
  getAllYearsTillCurrentYear,
} from "./utils/birthdayCalHelperFunctions";
import DayCardsContainer from "./components/DayCardsContainer";

import classes from "./BirthdayCal.module.scss";

const currentYear = getCurrentYear();
const years = getAllYearsTillCurrentYear();
const yearsOptions = getYearsOptions({ years });

const initialFormData = {
  selectedYear: currentYear,
  usersRawText: JSON.stringify(MOCK_BIRTHDAYS_DATA),
};

const initialProcessedData = {
  processedYear: currentYear,
  processedUsers: MOCK_BIRTHDAYS_DATA,
};

const BirthdayCal = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [processedData, setProcessedData] = useState(initialProcessedData);
  const { usersRawText, selectedYear } = formData;

  const handleFormData = useCallback(
    name => value => setFormData(prev => ({ ...prev, [name]: value })),
    []
  );

  const onClickProcess = useCallback(() => {
    try {
      const parsedUsers = JSON.parse(usersRawText.trim());
      setProcessedData({ processedUsers: parsedUsers, processedYear: selectedYear });
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      alert("Invalid JSON format");
    }
  }, [usersRawText, selectedYear]);

  return (
    <div className={classes.pageContainer}>
      <DayCardsContainer processedData={processedData} />
      <div className={classes.formContainer}>
        <TextArea
          name={"usersRawText"}
          value={usersRawText}
          placeholder={"Paste users data"}
          onChange={handleFormData("usersRawText")}
        />

        <div className={classes.buttonsContainer}>
          <Select
            label={"Year"}
            value={selectedYear}
            options={yearsOptions}
            onChange={handleFormData("selectedYear")}
          />
          <button className={classes.startProcessingButton} onClick={onClickProcess}>
            {"Process..!"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BirthdayCal;
