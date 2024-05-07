import { Command } from 'commander';
import generatorAct from './action'

export default function regisCmd(program: InstanceType<typeof Command>){
	program.command('generator').alias('g').arguments('<string>').action(generatorAct)
}