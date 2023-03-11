import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { attrs_ } from '../index.js'
test('attrs_', ()=>{
	equal(
		attrs_('id="foo"', 'class="bar"'),
		'id="foo" class="bar"')
	equal(
		attrs_('id="foo" class="bar"'),
		'id="foo" class="bar"')
	equal(
		attrs_('id="foo"', {
			class: 'bar',
			style: null,
		}),
		'id="foo" class="bar"')
	equal(
		attrs_({
			id: 'foo',
			style: null,
		}, 'class="bar"'),
		'id="foo" class="bar"')
	equal(
		attrs_({
			id: 'foo',
			style: null,
		}, ['class="bar"']),
		'id="foo" class="bar"')
	equal(
		attrs_({
			id: 'foo',
			style: null,
		}, ['class="bar" style="top: 0;"']),
		'id="foo" class="bar" style="top: 0;"')
})
test.run()
