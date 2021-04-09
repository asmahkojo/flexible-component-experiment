import React, { PropsWithChildren } from 'react';
import { ListItemSelector } from '../listItemSelector/ListItemSelector';
import styled from 'styled-components';
import { SectionNavItem } from './sectionNavItems/SectionNavItem';
import { ListItemSelectorProps } from '../listItemSelector/listItemSelector.interfaces';

const SectionNavWrapper = styled(ListItemSelector)`
  display: flex;
  flex-direction: column;
`;

type SectionNavProps = ListItemSelectorProps;

export function SectionNav({
  onChange,
  initialSelectedValue,
  selectedValue,
  children
}: PropsWithChildren<SectionNavProps>) {
  return (
    <SectionNavWrapper
      onChange={onChange}
      initialSelectedValue={initialSelectedValue}
      selectedValue={selectedValue}
    >
      {children}
    </SectionNavWrapper>
  );
}

SectionNav.Item = SectionNavItem;
