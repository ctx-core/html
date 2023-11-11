import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { style_ } from '../index.js'
test('style_', ()=>{
	equal(
		style_('display: block', 'position: absolute'),
		'display: block; position: absolute;')
	equal(
		style_('display: block; position: absolute;'),
		'display: block; position: absolute;')
	equal(
		style_('display: block', {
			position: 'absolute',
			top: null,
		}),
		'display: block; position: absolute;')
	equal(
		style_({
			display: 'block',
			top: null,
		}, 'position: absolute'),
		'display: block; position: absolute;')
	equal(
		style_({
			display: 'block',
			top: null,
		}, ['position: absolute']),
		'display: block; position: absolute;')
	equal(
		style_({
			display: 'block',
			top: null,
		}, ['position: absolute; top: 0']),
		'display: block; position: absolute; top: 0;')
	equal(
		style_({
			display: 'block',
			top: null,
		}, ['position: absolute; top: 0']),
		'display: block; position: absolute; top: 0;')
	equal(
		style_({
			display: 'block',
			top: null,
		}, ['position: absolute; top: 0;']),
		'display: block; position: absolute; top: 0;')
})
test.run()
