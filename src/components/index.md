#  kcode-ui

A simple UI component library.

## Install
  npm install kcode-ui

# Button

A simple button component.

## Usage

import { Button } from 'kcode-ui';

const MyComponent = () => {
  return <Button>Click me</Button>;
}

### Props

| Name    | Type                  | Default | Description            |
| ------- | --------------------- | ------- | ---------------------- |
| type    | default \| primary  |  `default` | Button type            |
| size    | small \| medium \| large | `medium` | Button size            |
| disabled | boolean               | `false` | Whether the button is disabled |
| plain    | boolean               | `false` | Whether the button is plain |
| round   | boolean               | `false` | Whether the button is round |
| circle  | boolean               | `false` | Whether the button is circle |
| style   | object                | `{}`    | Button style            |
| onClick | function              | `() => {}` | Button click event      |
| children | React.ReactNode       | `null`  | Button content          |

## Example

