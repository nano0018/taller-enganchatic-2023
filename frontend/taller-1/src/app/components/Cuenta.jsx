"use client"
import { useState } from "react";

export const Cuenta = ({ amount }) => {
  const [saldo, setSaldo] = useState(amount);
  return (
    <section className="bank-wrapper">
      <p>Saldo: ${saldo}</p>
      <button onClick={() => setSaldo(saldo + 1000)}>Depositar</button>
      <button onClick={() => setSaldo(saldo - 1000)}>Retirar</button>
    </section>
  );
};
