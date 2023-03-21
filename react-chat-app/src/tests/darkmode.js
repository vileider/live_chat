import {Selector} from 'testcafe'

fixture('Click Test').page('http://localhost:3000/chat');

test('button click test',async t=>{
    await t.click(Selector('#darkmode-button'));
    await t
    .expect(Selector('.flex_container').getStyleProperty('background-color')).eql('rgb(0, 0, 0)');
})