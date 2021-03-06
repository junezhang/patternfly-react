import { Dropdown } from 'react-bootstrap'
import React from 'react'
import { storiesOf } from '@storybook/react'
import { defaultTemplate } from '../../storybook/decorators/storyTemplates'
import { MenuItem } from '../index.js'

const stories = storiesOf('MenuItem', module)

const description = (
  <p>
    This component is based on React Bootstrap MenuItem component.
    This component represents a menu item in a dropdown. See
    {' '}
    <a href="https://react-bootstrap.github.io/components.html#menu-items">
      React Bootstrap Docs
    </a>
    {' '}
    for complete MenuItem component documentation.
  </p>
)

stories.addDecorator(
  defaultTemplate({
    title: 'MenuItem',
    description: description
  })
)

stories.addWithInfo('MenuItem', '', () =>
  <div>
    <Dropdown.Menu style={{ display: 'block' }}>
      <MenuItem header>Header</MenuItem>
      <MenuItem>link</MenuItem>
      <MenuItem divider />
      <MenuItem header>Header</MenuItem>
      <MenuItem>link</MenuItem>
      <MenuItem disabled>disabled</MenuItem>
      <MenuItem title="See? I have a title.">
        link with title
      </MenuItem>
      <MenuItem
        eventKey={1}
        href="#someHref"
        onSelect={eventKey => alert(`Alert from menu item ${eventKey}`)}
      >
        link that alerts
      </MenuItem>
    </Dropdown.Menu>
  </div>
)
