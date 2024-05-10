import React, { useState } from "react";

import css from "./float-label.module.scss";

const FloatLabel = (props:any) => {
  const [focus, setFocus] = useState(false);
  const { children, label, value } = props;

  const labelClass =
    focus || (value && value.length !== 0) ? `${css.label} ${css['label-float']}` : `${css.label}`;

  return (
    <div
      className={`${css['float-label']}`}
      onBlur={() => setFocus(false)}
      onFocus={() => setFocus(true)}
    >
      {children}
      <label className={labelClass}>{label}</label>
    </div>
  );
};

export default FloatLabel;
