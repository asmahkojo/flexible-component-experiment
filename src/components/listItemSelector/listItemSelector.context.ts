import { isEqual } from 'lodash';
import {
  createContext,
  useContext,
  ButtonHTMLAttributes,
  useCallback
} from 'react';
import { callAll } from '../../helpers/function.utilities';
import {
  ListItemValue,
  ListItemSelectorContextValue
} from './listItemSelector.interfaces';

export const ListItemSelectorContext = createContext<
  ListItemSelectorContextValue | undefined
>(undefined);

export const useListItemSelector = (
  value: ListItemValue,
  disabled: boolean | undefined
) => {
  const context = useContext(ListItemSelectorContext);
  if (context === undefined) {
    throw new Error(
      'useListItemSelector should be used within a <ListItemSelector /> component.'
    );
  }

  const isSelected = !disabled && isEqual(value, context.currentSelectedValue);

  const getListItemProps = useCallback(
    (props: ButtonHTMLAttributes<HTMLButtonElement> = {}) => ({
      role: 'button', //you can enforce certain aria attributes here
      ...props,
      disabled,
      selected: isSelected,
      onClick: callAll(props.onClick, () => {
        context.handleUpdatingSelectedValueState(value, disabled);
      })
    }),
    [context, disabled, isSelected, value]
  );

  return { getListItemProps };
};
