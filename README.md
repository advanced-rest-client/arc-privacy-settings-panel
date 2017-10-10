[![Build Status](https://travis-ci.org/advanced-rest-client/arc-privacy-settings-panel.svg?branch=stage)](https://travis-ci.org/advanced-rest-client/arc-privacy-settings-panel)  

# arc-privacy-settings-panel

`<arc-privacy-settings-panel>` A privacy control settings panel

### Example
```
<arc-privacy-settings-panel></arc-privacy-settings-panel>
```

### Styling
`<arc-privacy-settings-panel>` provides the following custom properties and mixins for styling:

Custom property | Description | Default
----------------|-------------|----------
`--arc-privacy-settings-panel` | Mixin applied to the element | `{}`



### Events
| Name | Description | Params |
| --- | --- | --- |
| open-external-url | Sends cancelable event to request to open a link externally in a browser. If the event is not handled then it uses native `window.open` function. | url **String** - The URL to open. |
