### What
New typescript pattern `.d.mts`, `.d.cts` is not recognized by `@rollup/plugin-typescript`

### Actual
```sh
$ rollup -c
./index.mjs → stdout...                                                                                          
[!] Error: Unexpected token (Note that you need plugins to import files that are not JavaScript)                 
lib/a.d.mts (1:7)
1: export declare const value = "a";
          ^
Error: Unexpected token (Note that you need plugins to import files that are not JavaScript)
```

### Expect
No error.
