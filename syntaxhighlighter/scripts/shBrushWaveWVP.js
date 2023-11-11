/*
 * SyntaxHighlighter brush for BlueM.Wave project files (WVP)
 *
 * SyntaxHighlighter by Alex Gorbatchev
 * http://alexgorbatchev.com/
 *
 * Brush by Felix Froehlich
 * Last update : 11 Nov 2023
 * Homepage    : https://www.bluemodel.org
 * Brush page  : https://github.com/bluemodel/SyntaxHighlighter
 *
 */
;(function()
{
  //CommonJS
  typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

  function Brush() {
	  
	var optionkeywords = "title unit interpretation color linewidth linestyle showpoints";
	var filekeywords = "isColumnSeparated separator dateformat decimalSeparator iLineHeadings iLineUnits iLineData useUnits columnWidth dateTimeColumnIndex";

    // map pattern to CSS style
    this.regexList = [
	{ regex: new RegExp(/\s*#.*$/,'gm'), css:'comments' },
	{ regex: new RegExp(/^\s*file/, 'gmi'), css:'keyword' },
	{ regex: new RegExp(/^\s*series/, 'gmi'), css:'functions' },
	{ regex: SyntaxHighlighter.regexLib.doubleQuotedString, css: 'string' },
	{ regex: new RegExp(this.getKeywords(optionkeywords), 'gmi'), css:'value' },
	{ regex: new RegExp(this.getKeywords(filekeywords), 'gmi'), css:'value' },
	{ regex: new RegExp(/[=:,]/, 'gm'), css:'color3' },
    ];

  };

  Brush.prototype = new SyntaxHighlighter.Highlighter();
  Brush.aliases	= ['wvp' ];

  SyntaxHighlighter.brushes.WaveWVP = Brush;

  // CommonJS
  typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
}) ();