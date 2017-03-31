// widget.js

// person id, name i company tag
// dorzucic date ostatniego req do localstorage, 
// jesli ostatnia data mniejsza niz 20 min roznicy to nie rob req tylko 
const DEBUG = true;
const CSS = "test";
const ICON_BASE_64 = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAQAAABpN6lAAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
                        AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZ
                        cwAARt4AAEbeAY4mMlsAAAAHdElNRQfhAxwMGjdNKVbAAAAMdElEQVR42u2df5BVZRnHP+fHXVh+
                        LQSEuJHIWKSIwKBQQZnmhBNKNKBjmsaMTczk2GQ5jtqsmlrW2FgWmDBZ0miZTBOOE9YM2Kg0IgMK
                        CxmglrMkAQLuwi4s9/x4++N9z7nvubv3HNx7zr3X7XzPH+zePfd9n+f7Pu/z/nqeF8iRI0eOHDly
                        5MiRI0eOHP9/MGpem4Gh1SoiMggEQn06qAgwMDEQeKf5voWBwK8FEdkSIBX3QkVMWpjAmUxmAsMY
                        xnBGAN30cIITHORt9nOQLvzw+1bWRGRHgIWBq36ewDRmM4fzOIMWrJhveXRxgNfZwjb+wUH1qf0+
                        rKcBCDCwVKsXmMkXuZzzGaH93Vc9ve/3DEzt92528RfWsx0nUmpDw1Tta/ApVvKGUlbg4eDg4Yef
                        9P/4+OG7wSdvsIJPqqayIhQ1GEwsDGAsy9kSiu/gRpT28XBxccoeFxev7E0XR33is4XljEVaQgOS
                        YCjlJ/IgR0PVvTJlnIT2D74XJc0Lv3eUB5mo1ZaK4GnAAjzO4DssZxQCX30G4ONjaI7vBEc4wDt0
                        cpIeeoDhDKeZ0bRyBmMZFr7pITDD1vYAE4NjrOIhDqg6GwBSuQK30aXaz9faMrCBLjbzKDdyEa0M
                        rVjWUFq5iBt5lM109mn/Uuld3EYB0rODgUM6vXlsLxPVxVU/vcVqFjO+D2kWtvZYfZQZz2JW81af
                        8gJatzOPujtFGxjGSiViufKHWcU8mkKlpaJmTKsZmIqY4J0m5rGKw31IkD+tpFlJUQcY2MC5bI+I
                        5imj38oyxiB9jD0gUzWwsFUJY1jG1kj5QZ3bORc0wmqs/vUcR2hDlbSCzSxShmlV3UtlZwEwWcRm
                        rRbZGQTH+WrtKZCO74eRtnfxEOzhSiVumiIZ2IrSK9mDwNNqdRH8gJo6RDlhXRVpewdBD200U5oN
                        pg3p8Jppo6dP3Y9CrHdJVX2DAmvLTF+wiXMyVD5Kwjls0tyupGAthchOQ2bqm8DTCIoRt/cAFrXp
                        idL7WDwQcYlFBE9TAyuwgJWa+i6CThZS2xFZ2tlCOpUEAQUrIVsLtIC7ETia+h3MBAo131wrADPp
                        0ChwENydJQU2cJXW91wE7UyiXlMRG5hEe0iB9EVXZSWPCUzhEEL1OxfBbibWTf2AgonsDinwEBxi
                        ipI2ZRiYbIxU1cGUuqofUDCFjkizbMzCFdrA7WHv9xEcY1bd1Q8km8UxJZWU8Pa0JTOBs3kvrMRF
                        cANQqLf2oKS4QfMEgvc4m1S7gQU8HlbhqgGn/q0fwEYOziX5HifF0cACLg5b30Owk2HU+lQpDgYw
                        jJ2hJ/ARXJweBSawLuL+FqVXeEqwgEURV7iOlDqBCczAVby6asrZWOoHFDytJJSSzkiHAgtYobyr
                        j6DIBbEFWxk/lWACF1BUUjoIVpBCQxnABN7V2n9tbLHZrwfiqIe1mg28ywQSPVWSJzfxuIRxeFiq
                        8hWx7wuuZ0FmNPj8lSdi31jBUkzAwGMcl/AUZnWb5xawRpmUh+BlKnNqAr8MHVEWjxduffQPA3hZ
                        vecgWEOVncAARoQTTQfBHVSyGguYg8DF6efgK41HliyYW1EtG7hDa64ORlDVcG0B81WPkrOAyp7V
                        Aq7WlsrZPA6CqysSIEcsoUk8P8kG4n2AAcwAPGwEBjtpp1IAiwB2UaQJJ7MpkqCAw65YGdrZyXQE
                        Bh42M9gUL03ydPZ89a+PSTsCq4JT8TF5nbv4UYYbYwJo43XMMIak/O8WHu1Mx1d2en5SkfEEeMB0
                        Sr1oB3E9ysfkx7zA57EQqZMg23QjmzEqqI+SbgfXhT9Pp4ojVDnD3qcciodgAUletZ7zAJR0CzSJ
                        9yWtWpK6wEhaVAEmcJCkEDY/4wOKpFghoaQ0ldQtjORE3BfiCDAQtKjDbIGBQ/dpiFj/M/tuHAqq
                        oYbSwkGMys2WZLJNGkW9HKemQYwDgACO0xv+boen0wMkQN9dcynWW7/TwikVnifjUhNmgkkE9GhK
                        D2E4jbQNUgmB1QrA1azhfRMggG5OaQSMrLduiZAjV2mvsioCAHoVAQYCi1E0ugUYwIcZGs5DejhG
                        rN9K7gJHVAE+MKXhCQBoVdIK4BBd8S/HDYMCC5c3mUoQwj6D3ydWb2Q6GUoKnA5mf4HE7+BXnDgn
                        EiCL28VChFa0H/sNM3GqUh2MeHUQwCwlrVwaUQ0BADspzQRn0kJXzLTCxOdMZmd2YuCyjf0xChl4
                        jGA2wRAIr1VXoQmcG+6xeQiuoPJqwASWaIdUaT/yQG4JlT2XBVyi7QY4fIIU1ifbtB2h1cRtRnyE
                        owgV+JzF4yA4yqSKStnAz7Qdoe3KLqqAjYwGK20ytVQo0gKWUoodyeYpIlhaoRHkBt6/teb6CYmd
                        PMk8BPCcqtDEYxLXxHzrCIDKCsjike71aIwuVzIZD1NJ/EeSnPZpYqu2wn4tltM/UwpZSf9xEayv
                        WLcBbNIk3XY6qiX7axuXXzMbgfTyM1nKU/1ujBkIrqGNy9LgvAI2cJ+qqRwWHl9mntoME8AaJX2V
                        MIBx/FcbCXYzkv79QA3i9CrUYQAFXlUS+gj2M46U5q1BWKwTbkzfRyXbMTKNFaxcug3cGnY/B8G9
                        pHaEK23gHW18Pcms9IpPASZwHsc1CfcznhTXLRZwc2gDHoId1Z65pAgZvPtSpP1vIdUGMoCmsIfJ
                        Kn5DowTJ2MBPw+ZxEbwSZhqkBhOYjxPm/bkIbmsICgrATdrg6+MlH4gNBDbQRunsz0PwDeodKVYA
                        lqppUgbuLwoDk+cpxQp6CL5C7eOEo+ovxo2o/zesrIZjE/gob1OKxfIQLIcwn6OWkGHz1+IoOYKT
                        oLPI8HzKAi7kuEaBi+Aesk+U6CuJBXwXEabbegh6s+n9OmzgS5RSFWS2xpOMpHaJS7Ltm1XoZqC+
                        h88SauCWbeA6tTYrUbBXxW1kbweyjpnsoJS0I5vja7VQP6BgKU6YviiHoFO0MSRjEiyVpnsnp7SB
                        Ty6/b6iV+iC97xWciAjhIvgnC9Bz/dJEkDF+qUqR8DTyT7K4lupDEKT+JuW5Y4I/MQtIO3MwiP95
                        Rimt54vtY26t1Qfpaz/EeqKJsy4Cl3XMQU5Fq88dDVDgYbUgL9XmIHiR1nqoLykwMLiLomYHgXF6
                        vKBlD5sDzB/Wyb4XQTGSQy4Q3I+VfAKcHeToP0ttmZWTIHiX1SxkTPh+kEEuc8j1J74WmEwXQuv3
                        cmPmc9Q9gV6OyQW+R7cyz743CBzhGb7JHEYnUtk/bODhslVIL/er1PkGWJJLnz+Jx9Tmef93SAgO
                        8xK/4BaWMJezGMsomilgM4Tm8CSnP2pgNqcQoePzWcvHqP3sMwbBEDWDZ1RYvaPtDeu3wQTPSTo5
                        RAd72c1bdPAKl9P/HN6Esmy1ZZRurGkgBO0xjUfoVC3lRC7GCW6ScSk/OpOh+J+m7zw+utfnIngO
                        eSVDQyK4IGMCt7JVmydGiQgM2ccLn14Ev+pDgA3Mj5i/w0U00m5kPyjdJXUB36ddC572VPt72gaG
                        fuTxZJlqFtAaHnVJJ/hIo6uPUj7wzhZTWcbj7E2IIncRXBtRzgJa2BLp/XvCmUWKomYHEzO8/qzA
                        WZzDeUzj44xjDC3Y2gTGx2Qbc/HCMx8bl1E8y2dxsQmCdC7lxYrB2g0Ls4/LshjNWL7ASfRM1CWU
                        2t8GWtmijf1FBHfSCJuwA4R+Q5Ac89ejZ/k9SzAImtjAZ9hP9GaAJ6lFKHZNqIgmusq4DxnJEfiO
                        mygSvRtifUjdBxxS/Xs043YQfAsoqFn9VDZE1vtFBH9nBIOi/aX6d5YZ9x+AJhXcfrfaZgnG/SKC
                        DbQMDvXlDKEtspUp2MNYAEZzOwf6We8/QSHj2MMaQV6z81hkK1Owj8nAhfycg+jXZAVv3QvanYIf
                        WEjTH8/GyBaawOFmbmJbOBpEL0rbx2U0yIK3WvUt4HL+Q3lWYS/d4Ry/dP2q7AK/Y/xgUR+aeEjb
                        No0uivSFs6u6QDuX0lDr/erUH8oGRGRrRPRLhFwx7uXr6nzhA9/zQU5dv43gVMXwWU+zgVdZxhAG
                        SdtLWMBv6Rs7qF+z6yM4zBrmq2S3mvb7rBcXBvAG4CC0z8xwJSh4m5dYx/N0KuW96iP73q+A2ZYv
                        GMcmpobZvFLtw7zJLnawmV0qKadO9wTXIrBRMJ7lTKPICQ6xnwN08C8tlcWKXME/6AgoZW+Uf2pR
                        +ab5QUVA8B8lBLUFjjBHjhw5cuTIkSNHjhw5cuSoE/4HRyhFmRJDs4UAAAAldEVYdGRhdGU6Y3Jl
                        YXRlADIwMTctMDMtMjhUMTI6MjY6NTUtMDQ6MDDwGyCcAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE3
                        LTAzLTI4VDEyOjI2OjU1LTA0OjAwgUaYIAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9y
                        Z5vuPBoAAAAASUVORK5CYII=`;


// get person and company data
const PERSON_ID = $("meta[name=person_id]").attr('content');
const COMPANY_TAG = $("meta[name=company_tag]").attr('content');
const BASE_PATH = `http://news.databridgecmms.com/api/news/${COMPANY_TAG}/${PERSON_ID}`;


const renderWidget = function(news, checkForNewsOnly) {
    const renderStyles = function() {
            var _style = $(`<style type="text/css">${CSS}</style>`)
            $('head').append(_style);
        }
        // news list fixed wrapper
    if (news.length > 0) {
        if (checkForNewsOnly) {
            var _wrapper = $('.widget-wrapper');
            // remove existing list
            _wrapper.find('ul').remove();
            _wrapper.append('<ul></ul>');

            // append new elements
            news.map(function(elem, key) {
                _wrapper.find('ul').append(`<li><a href="${elem.url}"><span>${key+1}.</span> ${elem.title}</a></div>`)
            })

            // add new status to get styles
            _wrapper.addClass('new');
            setTimeout(function() {
                _wrapper.removeClass('new')
            }, 10000)
        } else {

            $('.widget-wrapper').remove();

            // add styles
            renderStyles();

            // make wrapper
            var _wrapper = $('<div></div>').addClass('widget-wrapper loading');
            // make link to crm
            var _toCMS = $('<div class="widget-link"><a href="http://news.databridgecmms.com/"><small>new!</small>Go to CRM &rarr;</a></div>');
            // make toggler
            var _toggler = $(`<div class="widget-toggler"><a><img src="${ICON_BASE_64}"/></a></div>`);

            _wrapper.append(_toggler);


            _wrapper.append('<ul></ul>');

            news.map(function(elem, key) {
                _wrapper.find('ul').append(`<li><a href="${elem.url}"><span>${key+1}.</span> ${elem.title}</a></div>`)
            })

            // add wrapper to DOM
            _wrapper.append(_toCMS);
            $('body').append(_wrapper);

            //events
            // toggle open wrapper
            $('.widget-toggler').on('click', function(e) {
                _wrapper.toggleClass('open');
                e.preventDefault();
            })


            // hide on click outside wrapper
            $(document).mouseup(function(e) {
                if (!_wrapper.is(e.target) // if the target of the click isn't the container...
                    && _wrapper.has(e.target).length === 0) // ... nor a descendant of the container
                {
                    _wrapper.toggleClass('open');
                }
            });

            // stop loading state of widget
            setTimeout(function() {
                _wrapper.removeClass('loading')
            }, 1500)
        }
    }
}

var ajaxRequest = function() {

    var time_storage = JSON.parse(localStorage.getItem('widget.time_storage')) || 0;
    var news = JSON.parse(localStorage.getItem('widget.news')) || [];
    const time_diff = 1000 * 60 * 20 ; // 1000 * 1000 * 60 * 20;
    console.log('cache', time_storage, news);

    if ((Date.now() - time_diff) > time_storage) {
        // if now is 20 min after saved time get ajax
        if (DEBUG) { console.log('widget ajax' ) }
        $.ajax({
                method: "GET",
                url: BASE_PATH
            })
            .done(function(data) {
                if (DEBUG) { console.log('widget data', data.news) }

                localStorage.setItem('widget.time_storage', Date.now());
                localStorage.setItem('widget.news', JSON.stringify(data.news));

                renderWidget(data.news);
                setInterval(() => {
                    if (DEBUG) { console.log('widget interval tick') }
                    renderWidget(data.news, true);
                }, 1000 * 60 * 20)
            })
            .fail(function(err) {
                if (DEBUG) { console.log('widget error', err); }
            })
    } else {
        // if now is 20 before saved time get from cache
        if (DEBUG) { console.log('widget cache', news) }
        renderWidget(news);
    }



}
var init = function() {
    if (DEBUG) { console.log('widget start') }
    ajaxRequest()

}
init();
