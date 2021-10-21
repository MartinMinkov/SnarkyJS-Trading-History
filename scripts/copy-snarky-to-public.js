const fs = require("fs");
const path = require("path");

const PUBLIC_PATH = path.join(__dirname, "..", "public");
const NODE_MODULES_PATH = path.join(
  __dirname,
  "..",
  "node_modules",
  "@o1labs",
  "snarkyjs",
  "web"
);

function copyFolderSync(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest);

  fs.readdirSync(src).forEach((element) => {
    if (fs.lstatSync(path.join(src, element)).isFile()) {
      fs.copyFileSync(path.join(src, element), path.join(dest, element));
    } else {
      copyFolderSync(path.join(src, element), path.join(dest, element));
    }
  });
}

(() => {
  fs.copyFileSync(
    path.join(NODE_MODULES_PATH, "snarky_js_chrome.bc.js"),
    path.join(PUBLIC_PATH, "snarky_js_chrome.bc.js")
  );
  fs.copyFileSync(
    path.join(NODE_MODULES_PATH, "snarky.js"),
    path.join(PUBLIC_PATH, "snarky.js")
  );
  fs.copyFileSync(
    path.join(NODE_MODULES_PATH, "plonk_init.js"),
    path.join(PUBLIC_PATH, "plonk_init.js")
  );
  fs.copyFileSync(
    path.join(NODE_MODULES_PATH, "plonk_wasm_bg.wasm"),
    path.join(PUBLIC_PATH, "plonk_wasm_bg.wasm")
  );
  fs.copyFileSync(
    path.join(NODE_MODULES_PATH, "plonk_wasm.js"),
    path.join(PUBLIC_PATH, "plonk_wasm.js")
  );
  fs.copyFileSync(
    path.join(NODE_MODULES_PATH, "worker_init.js"),
    path.join(PUBLIC_PATH, "worker_init.js")
  );
  fs.copyFileSync(
    path.join(NODE_MODULES_PATH, "worker_run.js"),
    path.join(PUBLIC_PATH, "worker_run.js")
  );
  copyFolderSync(
    path.join(NODE_MODULES_PATH, "snippets"),
    path.join(PUBLIC_PATH, "snippets")
  );
})();
