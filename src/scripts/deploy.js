import * as fs from "fs/promises";
import * as path from "path";

go();

async function go() {
  const addonDir = path.normalize(
    "C/Users/Simon/Program Files (x86)/World of Warcraft/_retail_/Interface/Addons/SimonUnitFrames",
  );

  await fs.mkdir(addonDir, { recursive: true });

  await fs.copyFile(
    path.normalize("./out/SimonUnitFrames.lua"),
    path.join(addonDir, "SimonUnitFrames.lua"),
  );

  await fs.copyFile(
    path.normalize("./SimonUnitFrames.toc"),
    path.join(addonDir, "SimonUnitFrames.toc"),
  );

  await fs.copyFile(
    path.normalize("./templates.xml"),
    path.join(addonDir, "templates.xml"),
  );
}
