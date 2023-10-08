import React, { ReactNode } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface iInputs {
  name: string;
  email: string;
  phone: string;
}

const FormStep1 = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<iInputs>();
  const onSubmit: SubmitHandler<iInputs> = (data) => console.log(data);

  return (
    <>
      <p>Personal info</p>
      <p>Please provide your name, email address and phone number.</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" {...register("name")} />
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" {...register("email")} />
        <label htmlFor="phone">Phone Number</label>
        <input type="tel" id="phone" {...register("phone")} />
      </form>
    </>
  );
};

export default FormStep1;
