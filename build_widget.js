// build_widget.js

var fs = require('fs');

fs.readFile('./style.min.css', (err, css) => {
    if (err) throw err;
    var _css_data_file = css.toString('utf8');

    fs.readFile('./widget.min.js', (err, widget) => {
        if (err) throw err;
        var _widget_data_file = widget.toString('utf8');

        const findValueInJS = (_js_file, var_name) => {
            var re = new RegExp(`${var_name}=("([^"]|"")*")`)
            return _js_file.match(re)[1]
        }

        const replaceValueInJS = (_js_file, var_name, replacement) => {
            var re = new RegExp(`${var_name}=("([^"]|"")*")`);
            var matches = _js_file.match(re);
            if (matches) {
                _js_file = _js_file.replace(re, `${var_name}="${replacement}"`);
            }
            return _js_file
        }

        _widget_data_file = replaceValueInJS(_widget_data_file, "CSS", _css_data_file);
        var widget_template = `<script type="text/javascript">(function(){${_widget_data_file}})()</script>`
        fs.writeFile('./dist/widget.txt', widget_template, (err) => {
            if (err) throw err;
            console.log('Widget is packed & ready, \ncopy from widget.txt and paste on bottom of body');
        });


        fs.writeFile('./dist/widget.js', `(function(){${_widget_data_file}})()`, (err) => {
            if (err) throw err;
            console.log('Or use it as separate file, \nand paste it in head');
        });
    });

});
