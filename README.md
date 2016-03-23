# broken-sourcemaps

To reproduce broken source-maps:

> npm install && npm install uglify-js@2.6.2 && npm start

contents of the resulting build/bundle.min.js.map
```
{
  "version": 3,
  "sources": [
    "node_modules/browser-pack/_prelude.js",
    "src/foo.js",
    "src/index.js"
  ],
  "names": [
    "e",
    "t",
    "n",
    "r",
    "s",
    "o",
    "u",
    "a",
    "require",
    "i",
    "f",
    "Error",
    "code",
    "l",
    "exports",
    "call",
    "length",
    1,
    "module",
    "foo",
    "counter",
    "setInterval",
    "document",
    "querySelector",
    "textContent"
  ],
  "mappings": "CAAA,QAAAA,GAAAC,EAAAC,EAAAC,GAAA,QAAAC,GAAAC,EAAAC,GAAA,IAAAJ,EAAAG,GAAA,CAAA,IAAAJ,EAAAI,GAAA,CAAA,GAAAE,SAAAC,UAAA,YAAAA,OAAA,KAAAF,GAAAC,EAAA,MAAAA,GAAAF,GAAA,EAAA,IAAAI,EAAA,MAAAA,GAAAJ,GAAA,EAAA,IAAAK,GAAA,GAAAC,OAAA,uBAAAN,EAAA,IAAA,MAAAK,GAAAE,KAAA,mBAAAF,EAAA,GAAAG,GAAAX,EAAAG,IAAAS,WAAAb,GAAAI,GAAA,GAAAU,KAAAF,EAAAC,QAAA,SAAAd,GAAA,GAAAE,GAAAD,EAAAI,GAAA,GAAAL,EAAA,OAAAI,GAAAF,EAAAA,EAAAF,IAAAa,EAAAA,EAAAC,QAAAd,EAAAC,EAAAC,EAAAC,GAAA,MAAAD,GAAAG,GAAAS,QAAA,GAAAL,SAAAD,UAAA,YAAAA,OAAA,KAAA,GAAAH,GAAA,EAAAA,EAAAF,EAAAa,OAAAX,IAAAD,EAAAD,EAAAE,GAAA,OAAAD,MAAAa,GAAA,SAAAT,QAAAU,OAAAJ,SCCAI,OAAAJ,SAAAK,IAAA,gDCDA,GAAAA,KAAAX,QAAA,QAEA,IAAAY,SAAA,CAEAC,aAAA,WACAC,SAAAC,cAAA,UAAAC,YAAAL,IAAAA,IAAA,IAAAC,WACA",
  "file": "bundle.min.js",
  "sourceRoot": "",
  "sourcesContent": [
    null,
    null,
    null
  ]
}
```

Browse to http://localhost:8080 and notice that viewing source is broken 

## How it used to work
>> npm install && npm install uglify-js@2.6.0 && npm start

Contents of the source map that used to work
```
{
  "version": 3,
  "sources": [
    "node_modules/browser-pack/_prelude.js",
    "src/foo.js",
    "src/index.js"
  ],
  "names": [
    "e",
    "t",
    "n",
    "r",
    "s",
    "o",
    "u",
    "a",
    "require",
    "i",
    "f",
    "Error",
    "code",
    "l",
    "exports",
    "call",
    "length",
    1,
    "module",
    "foo",
    "counter",
    "setInterval",
    "document",
    "querySelector",
    "textContent"
  ],
  "mappings": "AAAA,CAAA,QAAAA,GAAAC,EAAAC,EAAAC,GAAA,QAAAC,GAAAC,EAAAC,GAAA,IAAAJ,EAAAG,GAAA,CAAA,IAAAJ,EAAAI,GAAA,CAAA,GAAAE,SAAAC,UAAA,YAAAA,OAAA,KAAAF,GAAAC,EAAA,MAAAA,GAAAF,GAAA,EAAA,IAAAI,EAAA,MAAAA,GAAAJ,GAAA,EAAA,IAAAK,GAAA,GAAAC,OAAA,uBAAAN,EAAA,IAAA,MAAAK,GAAAE,KAAA,mBAAAF,EAAA,GAAAG,GAAAX,EAAAG,IAAAS,WAAAb,GAAAI,GAAA,GAAAU,KAAAF,EAAAC,QAAA,SAAAd,GAAA,GAAAE,GAAAD,EAAAI,GAAA,GAAAL,EAAA,OAAAI,GAAAF,EAAAA,EAAAF,IAAAa,EAAAA,EAAAC,QAAAd,EAAAC,EAAAC,EAAAC,GAAA,MAAAD,GAAAG,GAAAS,QAAA,GAAAL,SAAAD,UAAA,YAAAA,OAAA,KAAA,GAAAH,GAAA,EAAAA,EAAAF,EAAAa,OAAAX,IAAAD,EAAAD,EAAAE,GAAA,OAAAD,MAAAa,GAAA,SAAAT,QAAAU,OAAAJ,SCCAI,OAAAJ,SAAAK,IAAA,gDCDA,GAAAA,KAAAX,QAAA,QAEA,IAAAY,SAAA,CAEAC,aAAA,WACAC,SAAAC,cAAA,UAAAC,YAAAL,IAAAA,IAAA,IAAAC,WACA;ADNA;AACA;;ACDA;AACA;AACA;AACA;AACA;AACA;AACA",
  "file": "generated.js",
  "sourceRoot": "",
  "sourcesContent": [
    "(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require==\"function\"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error(\"Cannot find module '\"+o+\"'\");throw f.code=\"MODULE_NOT_FOUND\",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require==\"function\"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})",
    "//import \"babel-polyfill\";\nmodule.exports = {foo: \"bar\"};",
    "var foo = require(\"./foo\");\n\nvar counter = 0;\n\nsetInterval(function() {\n    document.querySelector(\"#count\").textContent = foo.foo + \" \" + counter++;\n}, 1000);"
  ]
}
```

With this source map, browsing "foo.js" etc worked just fine.
