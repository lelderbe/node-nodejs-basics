# Node.js basics

These are my solutions for [Week1: Module "Node.js basics"](https://github.com/rolling-scopes-school/tasks/blob/master/node/modules/nodejs-basics/README.md)

Tasks are here: https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/nodejs-basics/assignment.md#subtasks

## Run tests

You can test with the npm scripts below:

#### File system (src/fs)

```bash
npm run fs:copy
npm run fs:create
npm run fs:delete
npm run fs:list
npm run fs:read
npm run fs:rename
```

#### Command line interface(src/cli)

```bash
npm run cli:args -- --addYourArgHere yourArgValue --Param2 value2

# for bash
RSS_1=Hello RSS_2=World npm run cli:env

# for Windows PowerShell
$env:RSS_1="Hello"; $env:RSS_2="World"; npm run cli:env
```

#### Modules(src/modules)

```bash
npm run modules
```

#### Hash (src/hash)

```bash
npm run hash
```

#### Streams (src/streams)

```bash
npm run streams:read
npm run streams:transform
npm run streams:write
```

#### Zlib (src/zip)

```bash
npm run zip:compress
npm run zip:decompress
```

#### Worker Threads (src/wt)

```bash
npm run wt
```

#### Child Processes (src/cp)

```bash
npm run cp -- --add your args here
```
