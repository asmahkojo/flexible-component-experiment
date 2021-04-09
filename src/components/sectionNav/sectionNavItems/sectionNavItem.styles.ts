import styled, { css } from 'styled-components';
// eslint-disable-next-line import/namespace
import { colors } from '../../../colors';

interface SectionNavItemWrapperProps {
  disabled?: boolean;
  selected?: boolean;
}

const removeDefaultButtonStyles = css`
  background: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
  font: inherit;
  margin: 0;
  padding: 0;
  text-align: initial;
`;

export const SectionNavItemWrapper = styled.button<SectionNavItemWrapperProps>`
  --font-color: ${colors.text.light};
  --primary-color: ${colors.palette.primary.main};
  --secondary-color: ${colors.palette.primary.secondary};

  ${removeDefaultButtonStyles}
  border-left: 0.25rem solid transparent;
  cursor: pointer;
  color: var(--font-color);
  display: flex;
  min-height: 1.5625rem;
  padding: 0.375rem 0.75rem 0.375rem 0.5rem;

  & > * {
    flex: 1 1 auto;
  }

  &:hover,
  &:focus,
  &:focus-within {
    background-color: var(--secondary-color);
    color: var(--primary-color);
  }

  ${({ selected }) =>
    selected &&
    css`
      background-color: var(--secondary-color);
      border-left: 0.25rem solid var(--primary-color);
      color: var(--primary-color);
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: default;
      opacity: 0.3;

      &:hover {
        background-color: transparent;
        color: var(--font-color);
      }
    `}
`;
