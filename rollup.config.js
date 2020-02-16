import { terser } from 'rollup-plugin-terser'
import postcss from 'rollup-plugin-postcss'

export default {
	input: 'src/index.js',
	output: {
		file: 'ez/ezdo.tree.esm.js',
		format: 'esm'
	},
  	plugins: [
  		terser(),
    	postcss({
	      extract: true
	    })
  	]
 }