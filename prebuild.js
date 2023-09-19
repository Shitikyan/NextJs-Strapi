// https://github.com/vercel/next.js/issues/49169#issuecomment-1644272017

const path = require('node:path');
const fs = require('fs');
const baseDir = process.cwd();

const prebuildScripts = async () => {
  const file = path.join(
    baseDir,
    '/node_modules',
    'next/dist/server/require-hook.js'
  );

  const content = await fs.promises.readFile(file, 'utf-8');
  await fs.promises.writeFile(
    file,
    content.replace(
      'if (process.env.__NEXT_PRIVATE_PREBUNDLED_REACT) {',
      'if (true) {'
    )
  );
};

prebuildScripts();