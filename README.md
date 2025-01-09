# Color Flipper App

A simple web app to change the background color with a button click.

## How It Works

1. Click the `Green`, `Red`, or `Blue` buttons to change the background color.
2. Click the `Random` button to generate a random color.
3. The buttons use `id`s, and the `onclick` attribute is used to trigger the color change.

### JavaScript Logic
- The `setColor` function changes the color based on the button clicked.
- The `randomColor` function generates a random color using:
  ```javascript
  Math.round(Math.random() * 255);
