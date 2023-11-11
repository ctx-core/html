import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { attr_, raw__attr_ } from '../index.js'
test('attr_', ()=>{
	equal(attr_('id', '123&bar'), 'id="123&amp;bar"')
})
test('raw__attr_', ()=>{
	equal(raw__attr_('id', '123&amp;bar'), 'id="123&amp;bar"')
})
test.run()