import { class_ } from './class_.js'
export function class_2(r:Record<string, any>) {
	return (...class_a:string[])=>class_(r, ...class_a)
}
