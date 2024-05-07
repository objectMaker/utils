import {createSourceFile,SyntaxKind,ScriptTarget} from 'typescript'
import {getFileAbsPath,getFile} from '@/utils/index'
export default function (varName:string){
	const sourceFile =  createSourceFile("sourceTs.ts",getFile(getFileAbsPath('./test.ts')),ScriptTarget.ES2021)	
	console.log(sourceFile,'sourcefile')
}