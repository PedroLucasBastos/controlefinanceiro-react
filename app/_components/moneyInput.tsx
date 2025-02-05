import React, { forwardRef } from "react";
import { NumericFormatProps, NumericFormat } from "react-number-format";
import { InputProps, Input } from "./ui/input";

export const MoneyInput = forwardRef(
  (
    props: NumericFormatProps<InputProps>,
    ref: React.ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <NumericFormat
        {...props}
        getInputRef={ref}
        thousandSeparator="."
        decimalSeparator=","
        allowNegative={false}
        prefix="R$ "
        customInput={Input}
      />
    );
  },
);

MoneyInput.displayName = "MoneyInput";
