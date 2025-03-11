/** @noSelfInFile */

import { ccsWeTrack, dangerousDebuffs, stunsWeTracks } from "../auras";
import { config } from "../config";
import { playerCanDispelFromParty } from "../dispellable";
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
  sources: dotInfo
) {
  // Max 6 dots?
  let firstFrame: null | SimpleFrame = null;
  let prevFrame: null | SimpleFrame = null;
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
        config.unitFrame_smallIconSize * config.unitFrame_dotScale,
        config.unitFrame_smallIconSize * config.unitFrame_dotScale
      );
      if (prevFrame === null) {
        dotAuraFrame.SetPoint("BOTTOMRIGHT", parent, "BOTTOMRIGHT", -4, 4);
      } else {
        if (i === 3 && firstFrame !== null) {
          dotAuraFrame.SetPoint(
            "BOTTOMLEFT",
            firstFrame,
            "TOPLEFT",
            0,
            config.unitFrame_smallIconGap
          );
        } else {
          dotAuraFrame.SetPoint(
            "TOPRIGHT",
            prevFrame,
            "TOPLEFT",
            -config.unitFrame_smallIconGap,
            0
          );
        }
      }
      prevFrame = dotAuraFrame;
      if (i === 0) {
        firstFrame = dotAuraFrame;
      }
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
    }
  );
  const ccAuraFrame = createAuraFrame(nameP + "CC", parent, {
    defaultBorder: { r: 0, g: 0, b: 0 },
    showCount: false,
    borderSize: 4,
  });

  ccAuraFrame.SetSize(
    config.unitFrame_hugeIconSize,
    config.unitFrame_hugeIconSize
  );
  ccAuraFrame.SetPoint("LEFT", parent, "RIGHT", 4, 0);

  sources.dots.observe((dots) => {
    dotAuraFrames.forEach((f) => f.Hide());
    const ccAura =
      dots.find((s) => stunsWeTracks.includes(s.name)) ||
      dots.find((s) => ccsWeTrack.includes(s.name));
    if (!isNil(ccAura)) {
      ccAuraFrame.Show();
      applyAuraToAuraframe(ccAura, ccAuraFrame);
      if (stunsWeTracks.includes(ccAura.name)) {
        ccAuraFrame.setBorderColor({ r: 1, g: 1, b: 1 });
      } else if (
        ccAura.dispelName !== undefined &&
        ccAura.dispelName !== null &&
        (ccAura.dispelName === "Curse" ||
          ccAura.dispelName === "Magic" ||
          ccAura.dispelName === "Disease" ||
          ccAura.dispelName === "Poison") &&
        playerCanDispelFromParty(ccAura.dispelName)
      ) {
        ccAuraFrame.setBorderColor({ r: 0, g: 0.8, b: 0 });
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
          if (dangerousDebuffs.includes(dotinfo.name)) {
            dotAuraFrame.setBorderColor({ r: 255, g: 0, b: 0 });
            dotAuraFrame.SetSize(
              config.unitFrame_smallIconSize *
                (config.unitFrame_dotScale + 0.3),
              config.unitFrame_smallIconSize * (config.unitFrame_dotScale + 0.3)
            );
          } else {
            dotAuraFrame.setBorderColor(null);
            dotAuraFrame.SetSize(
              config.unitFrame_smallIconSize * config.unitFrame_dotScale,
              config.unitFrame_smallIconSize * config.unitFrame_dotScale
            );
          }
        }
      });
  });
}
