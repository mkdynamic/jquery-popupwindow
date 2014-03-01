# jQuery Popup Window Plugin

A super simple jQuery plugin for popup windows. Tested in IE7+, FF, Safari and
Chrome.

## Installation

### Bower

```bash
bower install jquery-popupwindow
```

### Manual

Download the [`jquery.popupwindow.js`][script] file to your project, and add to
your page after including jQuery:

```html
<script src="jquery.js" type="text/javascript"></script>
<script src="jquery.popupwindow.js" type="text/javascript"></script>
```

Checkout this [example].

## Basic Usage

```javascript
$.popupWindow(url, [options]);
```

| argument | type   | description                     |
|----------|--------|---------------------------------|
| url      | string | *Required* URL to open popup to |
| options  | object | *Optional*                      |

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

## Options

| option     | type     | default | notes |
|------------|----------|---------|-------|
| height     | integer  | `500`   |       |
| width      | integer  | `500`   |       |
| toolbar    | boolean  | `false` |       |
| scrollbars | boolean  | `false` | safari always adds scrollbars |
| status     | boolean  | `false` |       |
| resizable  | boolean  | `false` |       |
| left       | integer  | `0`     |       |
| top        | integer  | `0`     |       |
| center     | boolean  | `true`  | auto-center |
| createNew  | boolean  | `true`  | open a new window, or re-use existing popup |
| name       | string   | `null`  | specify custom name for window (overrides createNew option) |
| location   | boolean  | `false` |       |
| menubar    | boolean  | `false` |       |
| onUnload   | function | `null`  | callback when window closes |


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/mkdynamic/jquery-popupwindow/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

[script]: https://github.com/mkdynamic/jquery-popupwindow/raw/master/jquery.popupwindow.js
[example]: https://github.com/mkdynamic/jquery-popupwindow/blob/master/example.html
