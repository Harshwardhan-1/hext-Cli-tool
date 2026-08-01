import path from 'path';
import { fileURLToPath } from 'url';


// file:///C:/Users/Harsh/Desktop/jexts/src/utils/path.js

// ko convert kiya ja raha hai

// Normal Windows path me.

// Result

// C:\Users\Harsh\Desktop\jexts\src\utils\path.js

const _filename=fileURLToPath(import.meta.url);

//give only folder path.js removed

const _dirname=path.dirname(_filename);

export const ROOT_DIR= path.join(_dirname,"../..");
