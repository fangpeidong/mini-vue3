import minimist from 'minimist';
import { createRequire } from 'module';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const args = minimist(process.argv.slice(2));
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const require = createRequire(import.meta.url);
const target = args._[0] || 'reactivity'; // 打包哪个项目
const format = args.f || 'life'; // 打包后的模块化规范

console.log(target, format, __dirname, require);

const entry = resolve(__dirname, `../packages/${target}/src/index.ts`);
