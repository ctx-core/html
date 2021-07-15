import { class_ } from './class_.js'
export function class_2(r:Record<string, any>):(...class_a:string[])=>string {
	return (...class_a:string[])=>class_(r, ...class_a)
}
