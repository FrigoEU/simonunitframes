/** @noSelfInFile */

import { config } from "../config";
import { healthinfo, observeAll, Source, sources } from "../sources";
import {
  applyAuraToAuraframe,
  createAuraFrame,
  getStandardBorderBackdropObj,
  myAuraFrame,
} from "./auras";

export function drawPartyTargetedByFrames(
  config: config,
  namePrefix: string,
  parent: SimpleFrame,
  sources: healthinfo,
  arena: Pick<sources, "arena1" | "arena2" | "arena3">
) {
  const arenaDps1TargetFrame = createAuraFrame(
    namePrefix + "arenaDps1Target",
    parent,
    { r: 0, g: 0, b: 0 },
    false
  );
  arenaDps1TargetFrame.SetSize(
    config.unitFrame_bigIconSize,
    config.unitFrame_bigIconSize
  );
  arenaDps1TargetFrame.SetPoint(
    "TOPRIGHT",
    parent,
    "TOPRIGHT",
    -4,
    -config.unitFrame_cooldownTopGap
  );

  const arenaDps2TargetFrame = createAuraFrame(
    namePrefix + "arenaDps2Target",
    parent,
    { r: 0, g: 0, b: 0 },
    false
  );
  arenaDps2TargetFrame.SetSize(
    config.unitFrame_bigIconSize,
    config.unitFrame_bigIconSize
  );
  arenaDps2TargetFrame.SetPoint(
    "TOPRIGHT",
    parent,
    "TOPRIGHT",
    -4 - (config.unitFrame_bigIconSize + config.unitFrame_bigIconGap),
    -config.unitFrame_cooldownTopGap
  );

  observeAndUpdate(sources.guid, arena.arena1);
  observeAndUpdate(sources.guid, arena.arena2);
  observeAndUpdate(sources.guid, arena.arena3);

  arena.arena2.exists.observe((exists) => {
    if (!exists) {
      arenaDps1TargetFrame.Hide();
      arenaDps2TargetFrame.Hide();
    }
  });

  function observeAndUpdate(
    unitGuidS: Source<WOWGUID>,
    arenaUnit: sources["arena1"]
  ) {
    observeAll(
      [
        unitGuidS,
        arenaUnit.arenaDpsIndex,
        arenaUnit.class,
        arenaUnit.target,
        arenaUnit.offensiveCooldownActive,
      ],
      ([
        unitGuid,
        arenaDpsIndex,
        class_,
        targetGuid,
        offensiveCooldownActive,
      ]) => {
        const frame =
          arenaDpsIndex === null
            ? null
            : arenaDpsIndex === 1
              ? arenaDps1TargetFrame
              : arenaDps2TargetFrame;
        if (!frame) {
          return;
        }
        if (unitGuid !== targetGuid) {
          frame.Hide();
          return;
        }

        frame.Show();
        renderIcon(frame, offensiveCooldownActive, class_);
      }
    );
  }

  return { arenaDps1TargetFrame, arenaDps2TargetFrame };
}

function renderIcon(
  frame: myAuraFrame,
  offensiveCooldownActive: AuraData | null,
  class_: className
) {
  if (offensiveCooldownActive) {
    applyAuraToAuraframe(offensiveCooldownActive, frame);
    frame.borderF.SetBackdrop({
      ...getStandardBorderBackdropObj(),
      edgeSize: 3,
    });
    frame.borderF.SetBackdropColor(0, 0, 0, 0);
    frame.borderF.SetBackdropBorderColor(255, 0, 0, 1);
    // frame.borderF.SetBackdropColor(255, 0, 0, 0.1);
  } else {
    // frame.Border.Hide();
    frame.cooldown.Hide();
    frame.icon.SetTexture(getClassIconTexturePath(class_));
    frame.icon.SetAllPoints(frame);
    frame.borderF.SetBackdrop({
      ...getStandardBorderBackdropObj(),
      edgeSize: 2,
    });
    frame.borderF.SetBackdropColor(0, 0, 0, 0);
    frame.borderF.SetBackdropBorderColor(0, 0, 0, 1);
  }
}

export function getClassIconTexturePath(class_: className) {
  return `Interface\\ICONS\\ClassIcon_${class_}.tga`;
}

export function drawArenaTargetedByFrames(
  config: config,
  namePrefix: string,
  parent: SimpleFrame,
  sources: healthinfo,
  party: Pick<sources, "party1" | "party2">
) {
  const arenaTargetedBy1Frame = createAuraFrame(
    namePrefix + "arenaTargetedBy1",
    parent,
    { r: 0, g: 0, b: 0 },
    false
  );
  arenaTargetedBy1Frame.SetSize(
    config.unitFrame_bigIconSize,
    config.unitFrame_bigIconSize
  );
  arenaTargetedBy1Frame.SetPoint(
    "TOPRIGHT",
    parent,
    "TOPRIGHT",
    -4,
    -config.unitFrame_cooldownTopGap
  );

  const arenaTargetedBy2Frame = createAuraFrame(
    namePrefix + "arenaTargetedBy2",
    parent,
    { r: 0, g: 0, b: 0 },
    false
  );
  arenaTargetedBy2Frame.SetSize(
    config.unitFrame_bigIconSize,
    config.unitFrame_bigIconSize
  );
  arenaTargetedBy2Frame.SetPoint(
    "TOPRIGHT",
    parent,
    "TOPRIGHT",
    -4 - (config.unitFrame_bigIconSize + config.unitFrame_bigIconGap),
    -config.unitFrame_cooldownTopGap
  );

  observeAndUpdate(sources.guid, party.party1, arenaTargetedBy1Frame);
  observeAndUpdate(sources.guid, party.party2, arenaTargetedBy2Frame);

  function observeAndUpdate(
    unitGuidS: Source<WOWGUID>,
    partyUnit: sources["party1"],
    frame: myAuraFrame
  ) {
    observeAll(
      [
        unitGuidS,
        partyUnit.class,
        partyUnit.target,
        partyUnit.offensiveCooldownActive,
      ],
      ([unitGuid, class_, targetGuid, offensiveCooldownActive]) => {
        if (unitGuid !== targetGuid) {
          frame.Hide();
          return;
        }
        frame.Show();

        renderIcon(frame, offensiveCooldownActive, class_);
      }
    );
  }

  return {
    arenaTargetedBy1Frame: arenaTargetedBy1Frame,
    arenaTargetedBy2Frame: arenaTargetedBy2Frame,
  };
}
