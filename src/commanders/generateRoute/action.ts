//@ts-nocheck
import {createSourceFile,ScriptTarget} from 'typescript'
import fs from 'fs'
import {getFileAbsPath,getFile} from '@/utils/index'
export default function (varName:string){
	const testFile  = getFile(getFileAbsPath('./test.ts'))
	const testFileArray = testFile.split('\n')
	const DetailPageListIndex =  testFileArray.findIndex(item=>{
		return item.includes('DETAIL_PAGE_LIST')
	})
	const varDeclarations = testFileArray.slice(0,DetailPageListIndex);
	let lastExportIndex = 0;
	varDeclarations.forEach((item,index)=>{
		item.includes('export') && (lastExportIndex = index)
	})
	varDeclarations.splice(lastExportIndex+1,0,`export const ${varName.toUpperCase()} = "${varName.toLowerCase()}";`)


	const sourceFile =  createSourceFile("sourceTs.ts",getFile(getFileAbsPath('./test.ts')),ScriptTarget.ES2021)	
	const detailPageListItems = sourceFile.statements.reduce((pre,current)=>{
		return pre.concat(current.declarationList.declarations)
	},[])


	const templateArr = ['export const DETAIL_PAGE_LIST: string[] = [','];']

	detailPageListItems.find(item=>item.name.escapedText === 'DETAIL_PAGE_LIST').initializer.elements.map(item=>item.escapedText).concat(varName).reverse().forEach((item,index) => {
		templateArr.splice(1,0,item.toUpperCase() + (index?',':''))
	})
	
	fs.writeFileSync(getFileAbsPath('./test.ts'),varDeclarations.concat(templateArr).join('\n'),'utf-8')
}