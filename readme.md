<div align="center">
  <br />
  <p>
    <a href="https://www.npmjs.com/package/ruxe"><img style="margin-top:-4%" src="https://user-images.githubusercontent.com/74130881/125087949-96172380-e0ea-11eb-82a4-eb9d99ada2c1.png" width="546" alt="ruxe" /></a>
  </p>
  <br />
  <p>
    <a href="https://www.npmjs.com/package/ruxe"><img src="https://img.shields.io/npm/v/ruxe.svg?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/ruxe"><img src="https://img.shields.io/npm/dt/ruxe.svg?maxAge=3600" alt="NPM downloads" /></a>
  </p>
</div>

## About

[Ruxe](https://www.npmjs.com/package/ruxe) is an open-source npm package used to wrap text into paragraphs for command line interfaces. It takes 2 lines of code to do that. And saves you a lot of time for formatting text. You can also change paragraph colors and change the alignment of the paragraph in seconds.

## Installation

```sh-session
npm install ruxe
```

## Parameters

The `wrap()` function requires atleast 1 parameter. And maximum of 2 parameters. The first parameter is the `string` that you would like to turn into a paragraph. And the second parameter is a configeration `object` consisting of at most 3 fields. Which are - <br/><br/>
`color` - Textcolor of the paragraph :string:<br/>
`align` - Alignment format of the paragraph :string:<br/>
`wordsPerLine` - Words after which a new line is created :number:<br/>
<br/>
By default `color` parameter is treated as `white`, the `align` parameter is treated as `left` and `wordsPerLine` is treated as `13`
<br/><br/>
**Available Colors:** black, red, green, yellow, blue, magenta, cyan and white
<br/>
**Available Alignment Formats:** left and right (Center will be added in the next version.)
<br/>
## Example Usage

```js
const wrap = require("ruxe");

let textwrapped = wrap("Harry has a little farm, he has 4 cows, 15 chickens and 3 goats in his farm. He likes to grow a variety of crops such as wheat, barley, rice and corn! He loves farming! He also has good storage facilities in the farm and modern irrigation systems!", { color:"cyan", wordsPerLine:8, align:"left" }); 

console.log(textwrapped); //each line of he paragraph will have 8 words, text color will be cyan in color and alignment of the paragraph will be left.
```
Output:
```sh-session
Harry has a little farm  he has 4
cows  15 chickens and 3 goats in
his farm. He likes to grow a
variety of crops such as wheat  barley
rice and corn! He loves farming! He
also has good storage facilities in the
farm and modern irrigation systems!
```

**For more examples [click me!](https://github.com/jaipack17/ruxe/tree/main/examples)**

## 🤝 Contribution

For contributing to this project, fork the repository [here](https://github.com/jaipack17/ruxe), make the changes and open a pull request! Pull requests will be reviewed before being merged.

## 🐛 Bugs

Found a bug? Having an issue with the package? Open a new issue [here](https://github.com/jaipack17/ruxe/issues)!
