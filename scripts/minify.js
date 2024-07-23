/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs');
const path = require('path');
const { minify } = require('terser');

async function minifyFile(filePath) {
  if (filePath.endsWith('.d.ts') || filePath.endsWith('.d.ts.map')) {
    return;
  }

  const code = fs.readFileSync(filePath, 'utf8');
  const sourceMapPath = filePath + '.map';
  const sourceMap = fs.existsSync(sourceMapPath) ? JSON.parse(fs.readFileSync(sourceMapPath, 'utf8')) : undefined;

  try {
    const result = await minify(code, {
      sourceMap: {
        content: sourceMap,
        url: path.basename(filePath) + '.map',
      },
      compress: {
        dead_code: true,
        drop_debugger: true,
        conditionals: true,
        evaluate: true,
        booleans: true,
        loops: true,
        unused: true,
        hoist_funs: true,
        keep_fargs: false,
        hoist_vars: true,
        if_return: true,
        join_vars: true,
        side_effects: true,
        warnings: false,
      },
      mangle: true,
    });

    fs.writeFileSync(filePath, result.code);
    if (result.map) {
      fs.writeFileSync(sourceMapPath, result.map);
    }
    console.log(`Minified: ${filePath}`);
  } catch (error) {
    console.error(`Error minifying ${filePath}:`, error);
  }
}

function minifyDir(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      minifyDir(filePath);
    } else if (path.extname(file) === '.js' && !file.endsWith('.d.ts')) {
      minifyFile(filePath);
    }
  });
}

minifyDir(path.join(__dirname, '../dist'));
