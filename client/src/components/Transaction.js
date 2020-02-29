import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ item }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = item.amount < 0 ? "-" : "+";
  return (
    <li className={item.amount < 0 ? "minus" : "plus"}>
      {item.text}{" "}
      <span>
        {sign}${Math.abs(item.amount)}
      </span>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(item._id)}
      >
        x
      </button>
    </li>
  );
};
