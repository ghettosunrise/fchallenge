import styled from 'styled-components/native';
import { theme } from '~/theme';

import { getProp, fromProp } from './utils';

export const Text = styled.Text`
  color: ${getProp('color', theme.darkSlateBlue)};
  font-size: ${getProp('size', '14px')};
  font-weight: ${getProp('weight', 300)};
  ${fromProp('line', { make: 'line-height' })};
  ${fromProp('align', { make: 'text-align' })};
`;

Text.Light = styled(Text).attrs({ weight: 100 })``;

Text.Medium = styled(Text).attrs({ weight: 500 })``;

Text.SemiBold = styled(Text).attrs({ weight: 600 })``;

Text.Bold = styled(Text).attrs({ weight: 700 })``;

export const ErrorText = styled.Text`
  ${({ theme: { fontBig } }) => fontBig}
  ${({ theme: { fontMedium } }) => fontMedium}
`;

