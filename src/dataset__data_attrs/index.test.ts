import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { dataset__data_attrs_ } from '../index.js'
test('dataset__data_attrs_', ()=>{
	equal(dataset__data_attrs_({
		foo: 'bar',
		baz: 123
	}), {
		'data-foo': 'bar',
		'data-baz': 123,
	})
})
test.run()
