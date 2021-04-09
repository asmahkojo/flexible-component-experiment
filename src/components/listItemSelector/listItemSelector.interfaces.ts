export type ListItemValue = string | number | Record<string, unknown>;

export interface ListItemSelectorProps {
  selectedValue?: ListItemValue;
  initialSelectedValue?: ListItemValue;
  onChange: (selectedValue: ListItemValue) => void;
  className?: string;
}

export interface ListItemSelectorContextValue {
  currentSelectedValue: ListItemValue;
  handleUpdatingSelectedValueState: (
    value: ListItemValue,
    disabled: boolean | undefined
  ) => void;
}
