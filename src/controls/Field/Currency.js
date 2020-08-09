import React from 'react'
import CurrencyInput from 'react-number-format';

const currencyFormatter = (value) => {
  if (!Number(value)) return "";

  const amount = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(value / 100);

  return `${amount}`;
}

const FieldCurrency = React.forwardRef((props, onChange, ref) => {
  return (
    <CurrencyInput
      {...props}
      ref={ref}
      format={currencyFormatter}
    />
  );
})

export { FieldCurrency }
