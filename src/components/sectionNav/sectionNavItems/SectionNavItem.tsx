import React from 'react';
import { useListItemSelector } from '../../listItemSelector/listItemSelector.context';
import { SectionNavItemWrapper } from './sectionNavItem.styles';
import { ListItemValue } from '../../listItemSelector/listItemSelector.interfaces';

interface SectionNavItemProps {
  disabled?: boolean;
  displayText: string | number;
  value: ListItemValue;
}

export function SectionNavItem({
  displayText,
  disabled,
  value
}: SectionNavItemProps) {
  const { getListItemProps } = useListItemSelector(value, disabled);

  return (
    <SectionNavItemWrapper
      {...getListItemProps({
        onClick: () => {
          console.log(
            'This onClick is called and so is the onClick encapsulated in getListItemProps. Yay!'
          );
        }
      })}
    >
      {displayText}
    </SectionNavItemWrapper>
  );
}
