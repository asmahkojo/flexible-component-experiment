import React, {
  PropsWithChildren,
  useState,
  useMemo,
  useCallback
} from 'react';
import { isEqual } from 'lodash';
import { ListItemSelectorContext } from './listItemSelector.context';
import {
  ListItemSelectorProps,
  ListItemValue,
  ListItemSelectorContextValue
} from './listItemSelector.interfaces';

export function ListItemSelector({
  selectedValue: selectedValueControlProp,
  initialSelectedValue,
  onChange,
  children,
  className
}: PropsWithChildren<ListItemSelectorProps>) {
  const [selectedValue, setSelectedValue] = useState(initialSelectedValue);

  const currentSelectedValue =
    selectedValueControlProp === undefined
      ? selectedValue
      : selectedValueControlProp;

  const handleUpdatingSelectedValueState = useCallback(
    (value: ListItemValue, disabled: boolean | undefined) => {
      if (!disabled && !isEqual(value, currentSelectedValue)) {
        if (selectedValueControlProp === undefined) {
          setSelectedValue(value);
        }
        onChange(value);
      }
    },
    [currentSelectedValue, onChange, selectedValueControlProp]
  );

  /*only using useMemo here to demonstrate my understanding of
   potential performance issues in a different scenario but the
   extra re-rendering without using useMemo (and useCallback) here is 
   not a big deal in this specific instance. 
  */
  const contextValue: ListItemSelectorContextValue = useMemo(
    () => ({
      currentSelectedValue,
      handleUpdatingSelectedValueState
    }),
    [currentSelectedValue, handleUpdatingSelectedValueState]
  );

  return (
    <ListItemSelectorContext.Provider value={contextValue}>
      <div className={className}>{children}</div>
    </ListItemSelectorContext.Provider>
  );
}
