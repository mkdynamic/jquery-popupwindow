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

## License

Released under the MIT License.

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/mkdynamic/jquery-popupwindow/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

[script]: https://github.com/mkdynamic/jquery-popupwindow/raw/master/jquery.popupwindow.js
[examples]: https://github.com/mkdynamic/jquery-popupwindow/blob/master/example.html
