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

## Basic Usage

```javascript
$.popupWindow(url, [options]);
```

| argument   | type   | description                     |
|------------|--------|---------------------------------|
| `url`      | string | *Required* URL to open popup to |
| `options`  | object | *Optional*                      |

### Simple Example

```javascript
$.popupWindow('http://google.com');
```

By default this will open a 500x500 pixel window which is auto-centered and has
minimal chrome.

### Example with Options

```javascript
$.popupWindow('http://www.google.com', { height: 300, width: 200 });
```

### More Examples

There are more [examples] to look at as well.

## Options

| option       | type     | default | notes |
|--------------|----------|---------|-------|
| `center`     | boolean  | `true`  | auto-center |
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

### Settings Not Working

Some settings may not work in certain browsers. This is because new browser allow the user to override any setting you pass to window.open.

For Firefox, open a new tab, go to `about:config`, then search for `disable_window_open_feature` to see the different overrides.

### Pop up being blocked

Most browser have pop up blockers installed. If you call a popup WITHOUT user interaction, say on page load, it will be blocked by the popup blocker. If a user was involved, such as a user clicking a button, the blockers will allow the popup. If the popup is blocked your user may not see the notification to allow them to see the pop up, and if they do they will have to choose to perminantly allow or just for that one time. So avoid doing it without the users interaction. If you would like to do something without user interaction I would suggest a modal window such as [this](http://getbootstrap.com/javascript/#modals) or [that](http://jqueryui.com/dialog/)

### Same origin

If your pop up does not require user interaction AND the url does NOT pass the same origin policy AND the user refreshes the primary webpage, without closing the popup windows. When you go to show the popup again it will not be brought to the front. 

Likewise, if your pop up does not require user interaction AND the url DOES pass the same origin policy AND the user refreshes the primary webpage, without closing the popup windows. When you go to show the popup again in Chrome it will not be brought to the front, but in Firefox it will be. 

The quick fix again is to require user interaction. If you do this, regardless of the url, it will bring the window to the front.

## License

Released under the MIT License.

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/mkdynamic/jquery-popupwindow/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

[script]: https://github.com/mkdynamic/jquery-popupwindow/raw/master/jquery.popupwindow.js
[examples]: https://github.com/mkdynamic/jquery-popupwindow/blob/master/example.html
