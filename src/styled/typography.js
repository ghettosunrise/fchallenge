import styled from "styled-components/native";

import { getProp, fromProp } from "./utils";

export const Text = styled.Text`
  color: ${getProp("color", "#222")};
  font-size: ${getProp("size", "14px")};
  font-weight: ${getProp("weight", 300)};
  ${fromProp("line", { make: "line-height" })};
  ${fromProp("align", { make: "text-align" })};
`;

Text.Light = styled(Text).attrs({ weight: 100 })``;

Text.Medium = styled(Text).attrs({ weight: 500 })``;

Text.SemiBold = styled(Text).attrs({ weight: 600 })``;

Text.Bold = styled(Text).attrs({ weight: 700 })``;
