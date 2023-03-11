import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { class__ } from '../index'
test('class__', ()=>{
	equal(class__('foo', 'bar')(), 'foo bar')
	equal(class__('foo', {
		bar: true,
	})({ baz: false, }), 'foo bar')
	equal(class__({
		baz: false,
	}, 'foo')({ bar: true }), 'foo bar')
	equal(class__(['foo'])({
		bar: true,
		baz: false,
	}), 'foo bar')
})
test.run()
