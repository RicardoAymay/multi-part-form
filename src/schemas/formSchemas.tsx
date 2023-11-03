import * as yup from "yup";

const phoneRegExp = /^\+(?:[0-9] ?){6,14}[0-9]$/ //thanks StackOverflow

export const form1schema = yup.object({
  name: yup.string().required("A name is required"),
  email: yup.string().email("Insert a valid email").required("An email is required"),
  phone: yup.string().matches(phoneRegExp, "Invalid phone number").required("A phone number is required"),

}).required();


export const form2Schema = yup.object({
  plan: yup.string().oneOf(["arcade", "advanced", "pro"]).required("You must choose a plan"),
  recurrence: yup.string().oneOf(["monthly", "yearly"]).required(),
});




