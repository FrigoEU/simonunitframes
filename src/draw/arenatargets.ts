/** @noSelfInFile */

import { config } from "../config";
import { healthinfo, observeAll, Source, sources } from "../sources";
import {
  applyAuraToAuraframe,
  createAuraFrame,
  hideAuraCooldownText,
  myAuraFrame,
} from "./auras";

const defaultBorder = { r: 255, g: 255, b: 255 };

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
    { defaultBorder, showCount: false }
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
  const arenaDps1TargetOffCdFrame = createAuraFrame(
    namePrefix + "arenaDps1TargetOffCd",
    parent,
    { defaultBorder, showCount: false }
  );
  arenaDps1TargetOffCdFrame.SetSize(
    config.unitFrame_smallIconSize,
    config.unitFrame_smallIconSize
  );
  arenaDps1TargetOffCdFrame.SetPoint(
    "BOTTOMRIGHT",
    arenaDps1TargetFrame,
    "BOTTOMRIGHT",
    0,
    0
  );
  arenaDps1TargetOffCdFrame.Hide();

  const arenaDps2TargetFrame = createAuraFrame(
    namePrefix + "arenaDps2Target",
    parent,
    { defaultBorder, showCount: false }
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
  const arenaDps2TargetOffCdFrame = createAuraFrame(
    namePrefix + "arenaDps2TargetOffCd",
    parent,
    { defaultBorder, showCount: false }
  );
  arenaDps2TargetOffCdFrame.SetSize(
    config.unitFrame_smallIconSize,
    config.unitFrame_smallIconSize
  );
  arenaDps2TargetOffCdFrame.SetPoint(
    "BOTTOMRIGHT",
    arenaDps2TargetFrame,
    "BOTTOMRIGHT",
    0,
    0
  );
  arenaDps2TargetOffCdFrame.Hide();

  observeAndUpdate(sources.guid, arena.arena1);
  observeAndUpdate(sources.guid, arena.arena2);
  observeAndUpdate(sources.guid, arena.arena3);

  arena.arena2.exists.observe((exists) => {
    if (!exists) {
      arenaDps1TargetFrame.Hide();
      arenaDps2TargetFrame.Hide();
    }
  });

  hideAuraCooldownText(arenaDps1TargetFrame);
  hideAuraCooldownText(arenaDps2TargetFrame);
  if (!config.off_cds_show_timer_text) {
    hideAuraCooldownText(arenaDps1TargetOffCdFrame);
    hideAuraCooldownText(arenaDps2TargetOffCdFrame);
  }

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
        const offCdFrame =
          arenaDpsIndex === null
            ? null
            : arenaDpsIndex === 1
              ? arenaDps1TargetOffCdFrame
              : arenaDps2TargetOffCdFrame;
        if (!frame || !offCdFrame) {
          return;
        }
        if (unitGuid !== targetGuid) {
          frame.Hide();
          offCdFrame.Hide();
          return;
        }

        frame.Show();
        renderIcon(
          config,
          frame,
          offCdFrame,
          offensiveCooldownActive,
          class_,
          config.off_cds_show
        );
      }
    );
  }

  return { arenaDps1TargetFrame, arenaDps2TargetFrame };
}

function renderIcon(
  config: config,
  frame: myAuraFrame,
  offCdFrame: myAuraFrame,
  offensiveCooldownActive: AuraData | null,
  class_: className,
  off_cds_show: boolean
) {
  if (config.arenatarget_show_icons === true) {
    frame.icon.SetTexture(getClassIconTexturePath(class_));
  } else {
    const color = C_ClassColor.GetClassColor(class_);
    frame.icon.SetColorTexture(color.r, color.g, color.b, 1);
  }

  if (offensiveCooldownActive !== null && off_cds_show === true) {
    applyAuraToAuraframe(offensiveCooldownActive, offCdFrame);
    offCdFrame.setBorderSize(1);
    offCdFrame.SetFrameLevel(10);
    // offCdFrame.setBorderColor({ r: 1, g: 0, b: 0 });
  } else {
    offCdFrame.Hide();
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
    { defaultBorder, showCount: false }
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
  const arenaTargetedBy1TargetOffCdFrame = createAuraFrame(
    namePrefix + "arenaDps1TargetOffCd",
    parent,
    { defaultBorder, showCount: false }
  );
  arenaTargetedBy1TargetOffCdFrame.SetSize(
    config.unitFrame_smallIconSize,
    config.unitFrame_smallIconSize
  );
  arenaTargetedBy1TargetOffCdFrame.SetPoint(
    "BOTTOMRIGHT",
    arenaTargetedBy1Frame,
    "BOTTOMRIGHT",
    0,
    0
  );
  arenaTargetedBy1TargetOffCdFrame.Hide();

  const arenaTargetedBy2Frame = createAuraFrame(
    namePrefix + "arenaTargetedBy2",
    parent,
    { defaultBorder, showCount: false }
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
  const arenaTargetedBy2TargetOffCdFrame = createAuraFrame(
    namePrefix + "arenaDps1TargetOffCd",
    parent,
    { defaultBorder, showCount: false }
  );
  arenaTargetedBy2TargetOffCdFrame.SetSize(
    config.unitFrame_smallIconSize,
    config.unitFrame_smallIconSize
  );
  arenaTargetedBy2TargetOffCdFrame.SetPoint(
    "BOTTOMRIGHT",
    arenaTargetedBy2Frame,
    "BOTTOMRIGHT",
    0,
    0
  );
  arenaTargetedBy2TargetOffCdFrame.Hide();

  observeAndUpdate(
    sources.guid,
    party.party1,
    arenaTargetedBy1Frame,
    arenaTargetedBy1TargetOffCdFrame
  );
  observeAndUpdate(
    sources.guid,
    party.party2,
    arenaTargetedBy2Frame,
    arenaTargetedBy2TargetOffCdFrame
  );

  hideAuraCooldownText(arenaTargetedBy1Frame);
  hideAuraCooldownText(arenaTargetedBy2Frame);

  if (!config.off_cds_show_timer_text) {
    hideAuraCooldownText(arenaTargetedBy1TargetOffCdFrame);
    hideAuraCooldownText(arenaTargetedBy2TargetOffCdFrame);
  }

  function observeAndUpdate(
    unitGuidS: Source<WOWGUID>,
    partyUnit: sources["party1"],
    frame: myAuraFrame,
    offCdFrame: myAuraFrame
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

        renderIcon(
          config,
          frame,
          offCdFrame,
          offensiveCooldownActive,
          class_,
          config.off_cds_show
        );
      }
    );
  }

  return {
    arenaTargetedBy1Frame: arenaTargetedBy1Frame,
    arenaTargetedBy2Frame: arenaTargetedBy2Frame,
  };
}
