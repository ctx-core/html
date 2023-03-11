import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { style__ } from '../index.js'
test('style__', ()=>{
	equal(
		style__('display: block')('position: absolute'),
		'display: block; position: absolute;')
	equal(
		style__('display: block;')('position: absolute;'),
		'display: block; position: absolute;')
	equal(
		style__('display: block')({
			position: 'absolute',
			top: null,
		}),
		'display: block; position: absolute;')
	equal(
		style__({
			display: 'block',
			top: null,
		})('position: absolute'),
		'display: block; position: absolute;')
	equal(
		style__({
			display: 'block',
			top: null,
		})(['position: absolute']),
		'display: block; position: absolute;')
	equal(
		style__({
			display: 'block',
			top: null,
		})(['position: absolute; top: 0']),
		'display: block; position: absolute; top: 0;')
	equal(
		style__({
			display: 'block',
			top: null,
		})(['position: absolute; top: 0']),
		'display: block; position: absolute; top: 0;')
	equal(
		style__({
			display: 'block',
			top: null,
		})(['position: absolute; top: 0;']),
		'display: block; position: absolute; top: 0;')
})
test.run()
