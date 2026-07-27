#!/usr/bin/env node

import { showHeader, showCompletion, showInstallError } from "./utils/ui.js";
import { promptUser } from "./prompts/index.js";
import { generateProject } from "./generator/index.js";

async function main() {
  try {
    showHeader();

    const config = await promptUser();

    await generateProject(config);

    showCompletion(config);
  } catch (error) {
    showInstallError(config);
    console.log(error);
    process.exit(1);
  }
}

main();