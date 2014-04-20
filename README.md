# jQuery Popup Window Plugin

[![Bower version](https://badge.fury.io/bo/jquery-popupwindow.png)](http://badge.fury.io/bo/jquery-popupwindow)

A super simple jQuery plugin for popup windows. Tested in IE7+, FF, Safari and
Chrome.

## Installation

Get the script via one of the methods below, and add it to your page after
jQuery:

```html
<script src="jquery.js"></script>
<script src="jquery.popupwindow.js"></script>
```

### Bower

```bash
bower install jquery-popupwindow
```

### Manual

Download the [`jquery.popupwindow.js`][script] file to your project.

[script]: https://github.com/mkdynamic/jquery-popupwindow/raw/master/jquery.popupwindow.js

## Basic usage

```javascript
$.popupWindow(url, [options]);
```

| argument   | type   | description                     |
|------------|--------|---------------------------------|
| `url`      | string | *Required* URL to open popup to |
| `options`  | object | *Optional*                      |

### Simple example

```javascript
$.popupWindow('http://google.com');
```

By default this will open a 500x500 pixel window which is auto-centered and has
minimal chrome.

### Example with options

```javascript
$.popupWindow('http://www.google.com', { height: 300, width: 200 });
```

### More examples

There are more [examples] to look at as well.

[examples]: https://github.com/mkdynamic/jquery-popupwindow/blob/master/example.html

## Options

| option       | type     | default | notes |
|--------------|----------|---------|-------|
| `center`     | string   | `'screen'`| possible values are: `'screen'`,`'parent'`, and `null`. For backwards compatibility `true`/`false` is still supported, but deprecated, and may be removed in a future version |
| `createNew`  | boolean  | `true`  | open a new window, or re-use existing popup |
| `height`     | integer  | `500`   |       |
| `left`       | integer  | `0`     |       |
| `location`   | boolean  | `false` |       |
| `menubar`    | boolean  | `false` |       |
| `name`       | string   | `null`  | specify custom name for window (overrides createNew option) |
| `onUnload`   | function | `null`  | callback when window closes |
| `resizable`  | boolean  | `false` |       |
| `scrollbars` | boolean  | `false` | safari always adds scrollbars |
| `status`     | boolean  | `false` |       |
| `toolbar`    | boolean  | `false` |       |
| `top`        | integer  | `0`     |       |
| `width`      | integer  | `500`   |       |

## Notes

### Settings not working

Some settings may not work in certain browsers. This is because new browsers
allow the user to override any setting you pass to `window.open`.

For Firefox, open a new tab, go to `about:config`, then search for
`disable_window_open_feature` to see the different overrides.

### Popup blocked

Most browsers will block popups created *without* user interaction (e.g. on
page load). If the popup is blocked, your user may not notice the notification
to allow them to see the pop up.

You should only create popups in the same event tick as a user interaction,
such as a click. If you would like to do something without user interaction, I
suggest a modal such as [Bootstrap modals] or [jQuery UI Dialog].

[Bootstrap modals]: http://getbootstrap.com/javascript/#modals
[jQuery UI Dialog]: http://jqueryui.com/dialog/

### Same origin

Your popup will not be brought to the front if:

  - if the user refreshes the primary webpage without closing the popup windows
    *and*
  - and you go to show the popup again *and*
  - your popup does not require user interaction *and*
  - the URL _does not_ pass the same origin policy.


Likewise, in Chrome (not Firefox), your popup will not be brought to the front
if:

  - if the user refreshes the primary webpage without closing the popup windows
    *and*
  - and you go to show the popup again *and*
  - your popup does not require user interaction *and*
  - the URL _does_ pass the same origin policy.

The quick fix again is to require user interaction. If you do this, regardless
of the URL, it will bring the window to the front.

### Mutliple monitors support: Internet Explorer

IE reports the primary monitor resolution. So, if you have multiple monitors IE
will *always* return the resolution of the primary monitor. This is a bug, and
there is an [open ticket with IE][ticket]. In Chrome and Firefox it returns the
monitor that the browser is currently located on. If the browser spans multiple
monitors, whichever monitor the browser has the most real estate on, is the
monitor it returns the size for.

What this means to the end users:

If they have multiple monitors, their multiple monitors have different
resolutions, they use Internet Explorer, the browser is currently located on a
secondary monitor, and they have `center` set to `'screen'` (the default),
centering will not be perfect as it will be based on the primary monitor's
resolution.

If you believe that could be your target audience, try using `center:
'parent'`.

[ticket]: https://connect.microsoft.com/IE/feedback/details/856470/ie11-javascript-screen-height-still-gives-wrong-value-on-secondary-monitor

## License

Released under the MIT License.

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/mkdynamic/jquery-popupwindow/trend.png)](https://bitdeli.com/free "Bitdeli Badge")
