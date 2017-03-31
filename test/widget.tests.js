// widget.tests.js
var chai = require('chai'),
    expect = chai.expect,
    should = chai.should,
    assert = chai.assert,
    axios = require('axios'),
    fs = require('fs');


// fs.readFile('./index.html', (err, data) => {
//     if (err) throw err;
//     var _indexHtml = data.toString('utf8');
//     //name=("company_tag") content=("([^"]|"")*")
//     const findContentOfMetaTag = (_html, name) => {
//         var re = new RegExp(`name=("${name}") content=("([^"]|"")*")`)
//         return JSON.parse(_html.match(re)[2])
//     }
//     var company_tag = findContentOfMetaTag(_indexHtml, 'company_tag');
//     var person_id = findContentOfMetaTag(_indexHtml, 'person_id');
//     console.log('_indexHtml', person_id, company_tag);
//     // console.log('_indexHtml', _indexHtml.indexOf('person_id'), _indexHtml.indexOf('company_tag'));
// });

describe('widget tests', () => {
    it('get latest news', (done) => {
        var company_tag = "ABF";
        var personal_id = '842';
        axios.get(`http://news.databridgecmms.com/api/news/${company_tag}/${personal_id}`)
            .then((d) => {
                expect(d.data.news).to.have.length.below(6);
                done();
            })
            .catch((e) => {
                console.log('error', e);
                done(e);
            })
    })
})
