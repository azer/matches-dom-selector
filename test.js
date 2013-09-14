
var matches = require('./');

document.body.innerHTML = '<ul><li><em>foo</em></li></ul>';
var ul = document.body.children[0];
var li = ul.children[0];
var em = li.children[0];

describe('matchesSelector(el, selector)', function(){
  it('should work', function(){
    expect(matches(em, 'ul li em')).to.be.true;
    expect(matches(em, 'ul em')).to.be.true;
    expect(matches(em, 'ul > li > em')).to.be.true;
    expect(matches(em, 'ul ul em')).to.be.false;

    expect(matches(li, 'ul li')).to.be.true;
    expect(matches(li, 'ul > li')).to.be.true;
    expect(matches(li, 'li')).to.be.true;
    expect(matches(li, 'div > li')).to.be.false;

    expect(matches(ul, 'ul')).to.be.true;
    expect(matches(ul, 'div ul')).to.be.false;
  })
})
