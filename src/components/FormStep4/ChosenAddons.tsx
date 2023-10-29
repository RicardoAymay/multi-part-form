import React from 'react'
interface iAddons{
    addon: string,
    price: number | false
    recurrence: "mo" | "yr"
}

const ChosenAddons = ({price, addon, recurrence}: iAddons) => {
  return (
    <div className="flex justify-between">
    <p className="text-primary-CoolGray flex items-center">
      {addon}
    </p>
    <p className="flex items-center text-primary-MarineBlue">+${price}/{recurrence}</p>
  </div>
  )
}

export default ChosenAddons