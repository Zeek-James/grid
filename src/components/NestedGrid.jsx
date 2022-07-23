import React from "react";

export const NestedGrid = () => {
  return (
    <div className={"nested__Container"}>
      <div className={""}>1</div>
      <div className={""}>2</div>
      <div className={""}>3</div>
      <div className={"nested"}>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
      </div>
      <div className={""}>5</div>
      <div className={""}>6</div>
    </div>
  );
};
