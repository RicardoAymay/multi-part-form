import React, { ReactNode } from "react";

interface iFormValues {
  children: ReactNode;
}

const Form: React.FC<iFormValues> = ({ children }) => {
  const handleFormAction = () => {
    return "It Worked!";
  };

  return (
    <form onSubmit={handleFormAction}>
      {children}
    </form>
  );
};

export default Form;

