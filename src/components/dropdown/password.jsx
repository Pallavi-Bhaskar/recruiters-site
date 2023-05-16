// import React from "react";
// import { InputGroup, FormControl } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// // import { BsEyeSlash } from "react-icons/bs";

// const PasswordInput = () => {
//   return (
//     <InputGroup className="mb-3">
//       {/* <FormControl type="password" placeholder="Password"> */}
//       <InputGroup.Prepend style={{ height: "6px" }}>
//         <InputGroup.Text></InputGroup.Text>
//       </InputGroup.Prepend>
//       {/* </FormControl> */}
//     </InputGroup>
//   );
// };

// export default PasswordInput;

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./logindropdown.css";
const PasswordToggle = () => {
  const [visible, setVisible] = useState(false);
  const Icon = (
    <FontAwesomeIcon
      icon={visible ? "eye-slash" : "eye"}
      onClick={() => setVisible((visibility) => !visibility)}
    />
  );
  const InputType = visible ? "text" : "password";
  return [InputType, Icon];
};

export default PasswordToggle;
