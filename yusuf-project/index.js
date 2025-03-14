import { readDirectory, createTextFile } from './readFile.js';
import path from 'path';


const downloadsPath = path.join('/Users/mac/Library/Containers/com.apple.BKAgentService/Data/Documents/iBooks/Downloads');

readDirectory(downloadsPath);


createTextFile(downloadsPath, 'mytextfile.txt', 'Buda birdwawadawawdwadw içeriktir');