import path from 'path'
import fs from 'fs'

export function getFile(filePath:string){
	//读取的就是utf-8字符串
	return fs.readFileSync(filePath,{ encoding: 'utf-8' })
}

export function getFileAbsPath(relativePath:string){
	return path.join(process.cwd(), relativePath)
}

