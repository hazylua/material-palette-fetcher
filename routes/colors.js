const { makePalette } = require('material-color-tool');
var express = require('express');
var router = express.Router();
var { Formatter } = require('fracturedjsonjs');

/**
 * @see https://github.com/Ignigena/material-color-tool/
 * @see https://material.io/inline-tools/color/
 * @see https://materialui.co/
 * @see https://chir.ag/projects/name-that-color/
 */
router.get('/', function (req, res, next) {
  const formatter = new Formatter();
  let palette = makePalette(req.query.color);
  let labels = [
    '50',
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900'
  ];
  palette_labeled = {};
  palette.map((color, i) => (palette_labeled[labels[i]] = color));
  console.log(req.query, palette_labeled);
  const a = formatter.Serialize(palette_labeled);
  // res.send(palette_labeled);
  res.render('index', {
    title: 'Material Palette Generator',
    palette: palette_labeled,
    copy: '1212'
  });
});

module.exports = router;
