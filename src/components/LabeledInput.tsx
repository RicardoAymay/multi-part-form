import React from 'react';

interface iLabelValues {
  inputName: string;
  inputType: string
}

const LabeledInput: React.FC<iLabelValues> = ({ inputName, inputType }) => {
  return (
    <label htmlFor={inputName}>
        <input type={inputType} />
    </label>
  );
}

export default LabeledInput;

