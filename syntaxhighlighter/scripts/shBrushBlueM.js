/*
 * Fortran brush for SyntaxHighlighter
 *
 * SyntaxHighlighter by Alex Gorbatchev
 * http://alexgorbatchev.com/
 *
 * BlueM brush by Felix Froehlich
 * Last update : 25 Sept 2021
 * Homepage    : https://www.bluemodel.org
 * Brush page  : https://github.com/bluemodel/SyntaxHighlighter
 *
 */
;(function()
{
  //CommonJS
  typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

  function Brush() {
	  
	var keywords = "Y J N";
	
	//var datatypes = "";
	
	//var functions = "";

    // map pattern to CSS style
    this.regexList = [
	{ regex: new RegExp(/^\*.*$/,"gm"), css:'comments' },
	{ regex: new RegExp(/\|/, 'gm'), css:'comments' },
	{ regex: new RegExp(this.getKeywords(keywords), 'gmi'), css:'keyword' },
	{ regex: new RegExp(/\s(\d*\.?\d+)/, 'gm'), css:'color3' },
	{ regex: new RegExp(/[^\d]\d\d\.\d\d(\.\d{2,4})?(\s\d\d:\d\d)?[^\d]/, 'gm'), css:'variable' },
	{ regex: new RegExp(/[^\d]\d\d:\d\d[^\d]/, 'gm'), css:'variable' }
    ];

  };

  Brush.prototype = new SyntaxHighlighter.Highlighter();
  Brush.aliases	= ['bluem' ];

  SyntaxHighlighter.brushes.BlueM = Brush;

  // CommonJS
  typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
}) ();