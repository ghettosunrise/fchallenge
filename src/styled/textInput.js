import styled from 'styled-components';

import { theme } from '~/theme';

import { fromProp, getProp } from './utils';

const TextInput = styled.TextInput`
  padding: ${getProp('paddingAll', '13px 12px')};
  ${fromProp('height', { make: 'height' })};
  ${fromProp('width', { make: 'width' })};
  ${fromProp('background', { make: 'background' })};
  ${fromProp('border', { make: 'border' })};
  ${fromProp('radius', { make: 'border-radius' })};
  ${fromProp('grow', { make: 'flex-grow' })};
  ${fromProp('marginTop', { make: 'margin-top' })};
  ${fromProp('marginBottom', { make: 'margin-bottom' })};
`;

TextInput.Search = styled(TextInput).attrs({
  grow: 1,
  background: theme.paleGrey,
  paddingAll: '0px 16px 0px 40px',
  radius: '4px',
  height: '34px',
})`
  flex-grow: 1;
  background: ${theme.paleGrey};
  border-radius: 4px;
  font-weight: 500;
  font-size: 12px;
`;

export default TextInput;
