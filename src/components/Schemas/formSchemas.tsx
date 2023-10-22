import * as yup from "yup";
import "yup-phone-lite"

export const form1schema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().phone("US").required("A phone number is required"),

}).required();


export const form2Schema = yup.object({
  plan: yup.string().oneOf(["arcade", "advanced", "pro"]).required(),
  recurrence: yup.string().oneOf(["monthly", "yearly"]).required(),
});
