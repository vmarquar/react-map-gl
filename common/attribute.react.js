// Copyright (c) 2016 Uber Technologies, Inc.

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
'use strict';

var React = require('react');
var r = require('r-dom');

var Attribution = React.createClass({

  displayName: 'Attribution',

  render: function render() {
    return r.div({
      style: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: this.props.width,
        height: this.props.height,
        pointerEvents: 'none'
      }
    }, [
      r.div({
        style: {
          position: 'absolute',
          right: 4,
          bottom: 4,
          lineHeight: 'initial',
          fontFamily: 'Helvetica',
          fontSize: '0.7em',
          background: 'white',
          padding: 4,
          pointerEvents: 'all'
        }
      }, [
        'Map tiles by ',
        r.a({href: 'http://stamen.com'}, 'Stamen'),
        ' under ',
        r.a({href: 'http://creativecommons.org/licenses/by/3.0'}, 'CC BY 3.0'),
        '. Data by ',
        r.a({href: 'http://openstreetmap.org'}, 'OpenStreetMap'),
        ', under ',
        r.a({href: 'http://www.openstreetmap.org/copyright'}, 'ODbL'),
        '.'
      ])
    ]);
  }
});

module.exports = Attribution;
