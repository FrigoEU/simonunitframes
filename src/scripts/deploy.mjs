import * as fs from "fs/promises";
import * as path from "path";

go().catch((err) => console.log(err));

async function go() {
  const addonDir = path.normalize(
    "C:/Program Files (x86)/World of Warcraft/_retail_/Interface/AddOns/SimonUnitFrames"
  );

  await fs.mkdir(addonDir, { recursive: true });

  await fs.copyFile(
    path.normalize("./out/SimonUnitFrames.lua"),
    path.join(addonDir, "SimonUnitFrames.lua")
  );

  await fs.copyFile(
    path.normalize("./SimonUnitFrames.toc"),
    path.join(addonDir, "SimonUnitFrames.toc")
  );

  await fs.copyFile(
    path.normalize("./templates.xml"),
    path.join(addonDir, "templates.xml")
  );

  await fs.copyFile(
    path.normalize("./lib/LibStub.lua"),
    path.join(addonDir, "LibStub.lua")
  );

  await fs.cp(
    path.normalize("./lib/LibPlayerSpells-1.0"),
    path.join(addonDir, "LibPlayerSpells-1.0"),
    { recursive: true }
  );

  console.log("Deploy successful");
  console.log("");
}
