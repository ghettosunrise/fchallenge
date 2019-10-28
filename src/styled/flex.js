import React from 'react';
import styled, { css } from 'styled-components';
import { AnimatedOpacity } from '~/components';

import { getProp, fromProp } from './utils';

const flex = css`
  display: flex;
  position: relative;
  background: ${getProp('background', 'transparent')};
  flex-direction: ${props => (props.row ? 'row' : 'column')};
  align-items: ${getProp('align', 'flex-start')};
  height: ${getProp('height', 'auto')};
  width: ${getProp('width', 'auto')};
  justify-content: ${getProp('justify', 'flex-start')};
  flex-grow: ${getProp('grow', 0)};
  flex-shrink: ${getProp('shrink', 0)};
  ${fromProp('marginLeft', { make: 'margin-left' })};
  ${fromProp('marginRight', { make: 'margin-right' })};
  ${fromProp('marginTop', { make: 'margin-top' })};
  ${fromProp('marginBottom', { make: 'margin-bottom' })};
  ${fromProp('marginAll', { make: 'margin' })};
  ${fromProp('shadow', { make: 'box-shadow' })};
  ${fromProp('paddingAll', { make: 'padding' })};
  ${fromProp('paddingTop', { make: 'padding-top' })};
  ${fromProp('paddingBottom', { make: 'padding-bottom' })};
  ${fromProp('paddingLeft', { make: 'padding-left' })};
  ${fromProp('paddingRight', { make: 'padding-right' })};
  ${fromProp('hPadding', { make: 'padding-horizontal' })};
  ${fromProp('vPadding', { make: 'padding-vertical' })};
  ${fromProp('border', { make: 'border' })};
  ${fromProp('borderTop', { make: 'border-top' })};
  ${fromProp('radius', { make: 'border-radius' })};
  ${fromProp('overflow', { make: 'overflow' })};
  ${fromProp('z', { make: 'z-index' })};
`;

const Flex = styled.View`${flex}`;

Flex.Touchable = styled.TouchableOpacity`${flex}`;

Flex.KeyboardAvoiding = styled.KeyboardAvoidingView.attrs({
  behavior: getProp('behavior', 'padding'),
})`${flex}`;

Flex.Card = styled(Flex).attrs({
  background: 'white',
  shadow: '2px 2px 0px rgba(64, 121, 179, 0.05)',
})``;

Flex.Absolute = styled(Flex)`
  position: absolute;
  ${fromProp('top', { make: 'top' })};
  ${fromProp('left', { make: 'left' })};
  ${fromProp('bottom', { make: 'bottom' })};
  ${fromProp('right', { make: 'right' })};
`;

Flex.Placeholder = ({ ...props }) => (
  <AnimatedOpacity from={1} to={0.2} loop reverse style={{ width: '100%' }}>
    <Flex {...props} />
  </AnimatedOpacity>
);

export default Flex;
