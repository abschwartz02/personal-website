import {generateTopBar, configureTopBar, generateFooter} from "./config.js";

document.body.innerHTML = await generateTopBar("FunFacts") + document.body.innerHTML;

document.body.innerHTML += await generateFooter();

await configureTopBar(document);

