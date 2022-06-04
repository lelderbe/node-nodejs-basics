// fs
import { create } from './src/fs/create.js';
import { copy } from './src/fs/copy.js';
import { remove } from './src/fs/delete.js';
import { list } from './src/fs/list.js';
import { read } from './src/fs/read.js';
import { rename } from './src/fs/rename.js';

// cli
import { parseEnv } from './src/cli/env.js';
import { parseArgs } from './src/cli/args.js';

// streams
import { read as streamRead } from './src/streams/read.js';
import { write } from './src/streams/write.js';
import { transform } from './src/streams/transform.js';

// zip
import { compress } from './src/zip/compress.js';
import { decompress } from './src/zip/decompress.js';

// parseEnv();
// parseArgs();

// await create();
// await copy();
// await rename();
// await remove();
// await list();
// await read();

// await streamRead();
await write();
// await transform();

// await compress();
// await decompress();
