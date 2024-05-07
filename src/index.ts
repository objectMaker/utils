import { Command } from 'commander';
import regisCmd from './commanders/generateRoute';
const program = new Command();




export const bootStrap = ()=>{
  console.log('bootstrap')
  regisCmd(program)
  program.parse();
}

bootStrap();