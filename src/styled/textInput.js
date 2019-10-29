import styled from "styled-components";

import { fromProp, getProp } from "./utils";

const TextInput = styled.TextInput`
  padding: ${getProp("paddingAll", "13px 12px")};
  ${fromProp("height", { make: "height" })};
  ${fromProp("width", { make: "width" })};
  ${fromProp("background", { make: "background" })};
  ${fromProp("border", { make: "border" })};
  ${fromProp("radius", { make: "border-radius" })};
  ${fromProp("grow", { make: "flex-grow" })};
  ${fromProp("marginTop", { make: "margin-top" })};
  ${fromProp("marginBottom", { make: "margin-bottom" })};
`;

export default TextInput;
