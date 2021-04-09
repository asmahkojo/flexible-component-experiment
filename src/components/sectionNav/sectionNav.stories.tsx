/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { SectionNav } from './SectionNav';
import { ListItemValue } from '../listItemSelector/listItemSelector.interfaces';

export default {
  title: 'Navigation/SectionNav',
  component: SectionNav
};

export function Default() {
  return (
    <div style={{ width: '30%' }}>
      <SectionNav initialSelectedValue={3} onChange={() => {}}>
        <SectionNav.Item displayText="Item 1" value={1} />
        <SectionNav.Item displayText="Item 2" disabled value={2} />
        <SectionNav.Item displayText="Item 3" value={3} />
      </SectionNav>
    </div>
  );
}

export function Controlled() {
  const [selectedValue, setSelectedValue] = React.useState<ListItemValue>(
    'baz'
  );

  return (
    <div style={{ width: '30%' }}>
      <SectionNav
        selectedValue={selectedValue}
        onChange={(value) => {
          console.log(value);
          setSelectedValue(value);
        }}
      >
        <SectionNav.Item displayText="Item 1" value="foo" />
        <SectionNav.Item displayText="Item 2" disabled value="bar" />
        <SectionNav.Item displayText="Item 3" value="baz" />
      </SectionNav>
    </div>
  );
}
