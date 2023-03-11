import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { class_ } from '../index'
test('class_', ()=>{
	equal(class_('foo', 'bar'), 'foo bar')
	equal(class_('foo', {
		bar: true,
		baz: false,
	}), 'foo bar')
	equal(class_({
		bar: true,
		baz: false,
	}, 'foo'), 'bar foo')
	equal(class_({
		bar: true,
		baz: false,
	}, ['foo']), 'bar foo')
})
test.run()
