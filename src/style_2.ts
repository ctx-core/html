import { style_ } from './style_.js'
export function style_2(r:Record<string, any>):(...style_a:string[])=>string {
	return (...style_a:string[])=>style_(r, ...style_a)
}
