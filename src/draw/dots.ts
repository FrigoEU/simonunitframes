/** @noSelfInFile */

import { dangerousDebuffs } from "../auras";
import { config } from "../config";
import { playerCanDispelFromParty } from "../dispellable";
import { isCc, isStun } from "../libplayerspells";
import { dotInfo } from "../sources";
import { isNil } from "../utils";
import {
  applyAuraToAuraframe,
  createAuraFrame,
  hideAuraCooldownText,
  myAuraFrame,
} from "./auras";

const defaultBorder = { r: 0.5, g: 0.5, b: 0 };

export function drawDotFrames(
  config: config,
  nameP: string,
  parent: SimpleFrame,
  sources: dotInfo,
) {
  // Max 6 dots?
  const dotAuraFrames: myAuraFrame[] = ([0, 1, 2, 3, 4, 5] as const).map(
    (i) => {
      const dotAuraFrame = createAuraFrame(nameP + "Dot" + i, parent, {
        defaultBorder,
        showCount: false,
      });

      if (!config.dots_show_timer_text) {
        hideAuraCooldownText(dotAuraFrame);
      }

      dotAuraFrame.SetSize(
        config.unitFrame_smallIconSize,
        config.unitFrame_smallIconSize,
      );
      dotAuraFrame.SetPoint(
        "BOTTOMRIGHT",
        parent,
        "BOTTOMRIGHT",
        -4 -
          (i % 3) *
            (config.unitFrame_smallIconGap + config.unitFrame_smallIconSize),
        4 +
          // Second row of dots
          (i >= 3
            ? config.unitFrame_smallIconGap + config.unitFrame_smallIconSize
            : 0),
      );
      // dotAuraFrame.SetPoint(
      //   "TOPRIGHT",
      //   parent,
      //   "TOPRIGHT",
      //   -4 - i * (config.unitFrame_smallIconGap + config.unitFrame_smallIconSize),
      //   -(
      //     config.unitFrame_cooldownSectionPercentage_friendly *
      //       config.unitFrame_fullHeight +
      //     4
      //   ),
      // );

      return dotAuraFrame;
    },
  );
  const ccAuraFrame = createAuraFrame(nameP + "CC", parent, {
    defaultBorder: { r: 0, g: 0, b: 0 },
    showCount: false,
    borderSize: 4,
  });

  ccAuraFrame.SetSize(
    config.unitFrame_hugeIconSize,
    config.unitFrame_hugeIconSize,
  );
  ccAuraFrame.SetPoint("LEFT", parent, "RIGHT", 4, 0);

  sources.dots.observe((dots) => {
    dotAuraFrames.forEach((f) => f.Hide());
    const ccAura =
      dots.find((s) => isStun(s.spellId)) || dots.find((s) => isCc(s.spellId));
    if (ccAura) {
      ccAuraFrame.Show();
      applyAuraToAuraframe(ccAura, ccAuraFrame);
      if (
        ccAura.dispelName !== undefined &&
        ccAura.dispelName !== null &&
        (ccAura.dispelName === "Curse" ||
          ccAura.dispelName === "Magic" ||
          ccAura.dispelName === "Disease" ||
          ccAura.dispelName === "Poison") &&
        playerCanDispelFromParty(ccAura.dispelName)
      ) {
        ccAuraFrame.setBorderColor({ r: 0, g: 0.8, b: 0 });
      } else if (isStun(ccAura.spellId)) {
        ccAuraFrame.setBorderColor({ r: 1, g: 1, b: 1 });
      } else {
        ccAuraFrame.setBorderColor({ r: 0, g: 0, b: 0 });
      }
    } else {
      ccAuraFrame.Hide();
    }
    dots
      .filter((d) => d !== ccAura)
      .forEach((dotinfo, i) => {
        const dotAuraFrame = dotAuraFrames[i];
        if (!isNil(dotAuraFrame)) {
          dotAuraFrame.Show();
          applyAuraToAuraframe(dotinfo, dotAuraFrame);
          dotAuraFrame.setBorderColor(
            dangerousDebuffs.includes(dotinfo.name)
              ? { r: 255, g: 0, b: 0 }
              : null,
          );
        }
      });
  });
}
