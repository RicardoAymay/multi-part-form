import { register } from "module";
import React, {forwardRef, ForwardedRef, InputHTMLAttributes} from "react";
import { FieldError } from "react-hook-form";



interface iInputForm1 extends InputHTMLAttributes<HTMLInputElement> {
  error: FieldError | undefined
  field: string
  label: string
}


const InputForm1 = forwardRef((
  { error, field, label, ...inputProps }: iInputForm1, ref: ForwardedRef<HTMLInputElement> 
) => {
    return(
  <div className="w-full h-fit flex flex-col space-y-1">
    <label htmlFor={field} className="text-primary-MarineBlue font-medium flex justify-between items-center">
      {label}  {error ? <p className="text-primary-StrawberryRed text-xs mt-2">{error.message}</p>: null}
    </label>
    <input
      {...inputProps}
      ref={ref}
      className="border-neutral-LightGray border text-primary-MarineBlue hover:border-primary-PurplishBlue rounded-md h-12 pl-3"
    />
    </div>
)});
InputForm1.displayName = 'InputForm1'
export default InputForm1;
