# flip-counter [![NPM version](https://img.shields.io/npm/v/vue-quick-menu.svg)](https://www.npmjs.com/package/flip-counter-js)

> This is a Flip Counter component with CSS3 animation style. It can be extended to use as a timer, countdown or else that can be represented with digits. 
[demo](https://brianjzhang.github.io/flip-counter-js/index.html)

## Installation

``` bash
 npm install flip-counter-js --save
```

## Usage
This version is 
``` xml
<quick-menu :menu-count=count :icon-class=icons :menu-url-list=list></quick-menu>
```

``` javascript
import Vue from 'vue'
import quickMenu from 'vue-quick-menu'

export default {
  ...
  components: {
    quickMenu
  },
  ...
}
```
## Props

Property|Type|Default|Description
---|---|---|---
menuCount|Number|4|The number of menu item，option(2,3,4)
menuUrlList|Array|-|An array of link of each menu item
iconClass|Array|-|An array of icon class of each menu item
position|top-left,top-right,bottom-left or bottom-right|top-left|The position of quick menu
backgroundColor|String|#009dc7|The background color of quick menu
color|String|#ffffff|The color of quick menu icon
isOpenNewTab|Boolean|false|If the menu will open a new tab after click
