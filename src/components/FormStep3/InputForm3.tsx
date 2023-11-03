import Image from "next/image";
import React, {
  ForwardedRef,
  InputHTMLAttributes,
  forwardRef,
  useContext,
} from "react";
import imgCheck from "../../assets/images/icon-checkmark.svg";
import { MainContext } from "../../contexts/MainContext";
import { FieldError } from "react-hook-form";

interface Inputform3Props extends InputHTMLAttributes<HTMLInputElement> {
  alt: string;
  title: string;
  subtitle: string;
  errors?: FieldError;
  price: number;
}

const InputForm3 = forwardRef(
  (
    { alt, title, subtitle, errors, price, ...inputProps }: Inputform3Props,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const { recurrence } = useContext(MainContext);

    return (
      <>
        <div className="flex">
          <input
            {...inputProps}
            ref={ref}
            type="checkbox"
            className="peer sr-only"
          />

          <figure
            className={`border w-5 h-5 absolute mt-6 ml-5 rounded-md flex items-center justify-center peer-checked:bg-primary-PurplishBlue`}
          >
            <Image src={imgCheck} alt={alt} />
          </figure>

          <label
            htmlFor={inputProps.id}
            className={`flex h-fit hover:border-primary-PurplishBlue w-full items-center justify-center pl-14 peer-checked:bg-neutral-Alabaster peer-checked:border-primary-PurplishBlue bg-white border rounded-md group`}
          >
            <div className="w-6/12 h-16 flex flex-1 flex-col justify-center space-y-1">
              <p className="text-sm text-primary-MarineBlue font-bold">
                {title}
              </p>
              <p className="text-xs text-primary-CoolGray">{subtitle}</p>
            </div>
            <div className="w-3/12 h-16 flex items-center justify-center ">
              <p className="text-sm text-primary-PurplishBlue">
                +{price}/{recurrence === "monthly" ? "mo" : "yr"}
              </p>
            </div>
          </label>
        </div>

    
      </>
    );
  }
);
InputForm3.displayName = 'InputForm3'
export default InputForm3;
