import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { styles_o_ } from '../index'
test('styles_o_', ()=>{
	equal(styles_o_('position: absolute;   top:   0;'), {
		position: 'absolute',
		top: '0'
	})
})
test.run()
