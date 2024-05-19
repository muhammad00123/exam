import React from "react";
import { Personal } from "./Accountsingle/Personal";
import { Perconal } from "./Perconal/Perconal";
import { Payment } from "./Payments/Payment";
import { Delivered } from "./Delivered/Delivered";
import { Discount } from "./Discount/Discount";
import { Securiti } from "./Securiti/Securiti";

export const Account = () => {
  return (
    <div>
      <Personal />
      <Perconal />
      <Payment />
      <Delivered />
      <Discount />
      <Securiti />
    </div>
  );
};
