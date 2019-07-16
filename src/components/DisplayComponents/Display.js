import React from "react";
import styles from './Display.module.css'
const Display = (props) => {
  return <div>{styles.display}>{props.data}</div>;
};
export default Display;