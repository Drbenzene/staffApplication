import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const TheDate = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="">
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
    </div>
    
  );
};

export default TheDate