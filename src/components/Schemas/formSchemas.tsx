import * as yup from "yup";
import "yup-phone-lite"

export const form1schema = yup.object({
  name: yup.string().required(),
  email: yup.number().positive().integer().required(),
  phone: yup.string().phone("US").required("A phone number is required")
  
}).required();


 