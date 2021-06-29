import { style_ } from './style_'
export function style_2(r:Record<string, any>) {
	return (...style_a:string[])=>style_(r, ...style_a)
}
