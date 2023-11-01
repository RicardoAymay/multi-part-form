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
  <div className="w-full h-fit flex flex-col">
    <label htmlFor={field} className="text-primary-MarineBlue font-medium">
      {label}
    </label>
    <input
      {...inputProps}
      ref={ref}
      className="border-neutral-LightGray border-borderWid1 rounded-md h-10 pl-3"
    />
    {error ? <p className="text-red-600 text-xs">{error.message}</p>: null}
    </div>
)});

export default InputForm1;
