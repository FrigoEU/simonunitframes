/** @noSelfInFile */

import { config } from "../config";
import { healthinfo, observeAll, Source, sources } from "../sources";
import { applyAuraToAuraframe, createAuraFrame, myAuraFrame } from "./shared";

export function drawPartyTargetedByFrames(
  config: config,
  namePrefix: string,
  parent: SimpleFrame,
  sources: healthinfo,
  arena: Pick<sources, "arena1" | "arena2" | "arena3">,
) {
  const arenaDps1TargetFrame = createAuraFrame(
    namePrefix + "arenaDps1Target",
    parent,
    { r: 0, g: 0, b: 0 },
  );
  arenaDps1TargetFrame.SetSize(
    config.unitFrame_bigIconSize,
    config.unitFrame_bigIconSize,
  );
  arenaDps1TargetFrame.SetPoint("TOPRIGHT", parent, "TOPRIGHT", -4, -config.unitFrame_cooldownTopGap);

  const arenaDps2TargetFrame = createAuraFrame(
    namePrefix + "arenaDps2Target",
    parent,
    { r: 0, g: 0, b: 0 },
  );
  arenaDps2TargetFrame.SetSize(
    config.unitFrame_bigIconSize,
    config.unitFrame_bigIconSize,
  );
  arenaDps2TargetFrame.SetPoint(
    "TOPRIGHT",
    parent,
    "TOPRIGHT",
    -4 - (config.unitFrame_bigIconSize + config.unitFrame_bigIconGap),
    -config.unitFrame_cooldownTopGap,
  );

  observeAndUpdate(sources.guid, arena.arena1);
  observeAndUpdate(sources.guid, arena.arena2);
  observeAndUpdate(sources.guid, arena.arena3);

  arena.arena2.exists.observe(exists => {
    if (!exists) {
      arenaDps1TargetFrame.Hide();
      arenaDps2TargetFrame.Hide();
    }
  })

  function observeAndUpdate(
    unitGuidS: Source<WOWGUID>,
    arenaUnit: sources["arena1"],
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
        if (offensiveCooldownActive) {
          applyAuraToAuraframe(offensiveCooldownActive, frame);
          // frame.Border.SetVertexColor(255, 0, 0);
        } else {
          // frame.Border.Hide();
          frame.cooldown.Hide();
          frame.icon.SetTexture(
            "Interface\\AddOns\\DefaultUIScript\\ClassIcons\\" +
            class_ +
            ".tga",
          );
          frame.icon.SetAllPoints(frame);
        }
      },
    );
  }

  return { arenaDps1TargetFrame, arenaDps2TargetFrame };
}

export function drawArenaTargetedByFrames(
  config: config,
  namePrefix: string,
  parent: SimpleFrame,
  sources: healthinfo,
  party: Pick<sources, "party1" | "party2">,
) {
  const arenaTargetedBy1Frame = createAuraFrame(
    namePrefix + "arenaTargetedBy1",
    parent,
    { r: 0, g: 0, b: 0 },
  );
  arenaTargetedBy1Frame.SetSize(
    config.unitFrame_bigIconSize,
    config.unitFrame_bigIconSize,
  );
  arenaTargetedBy1Frame.SetPoint("TOPRIGHT", parent, "TOPRIGHT", -4, 4);

  const arenaTargetedBy2Frame = createAuraFrame(
    namePrefix + "arenaTargetedBy2",
    parent,
    { r: 0, g: 0, b: 0 },
  );
  arenaTargetedBy2Frame.SetSize(
    config.unitFrame_bigIconSize,
    config.unitFrame_bigIconSize,
  );
  arenaTargetedBy2Frame.SetPoint(
    "TOPRIGHT",
    parent,
    "TOPRIGHT",
    -4 - (config.unitFrame_bigIconSize + config.unitFrame_bigIconGap),
    4,
  );

  observeAndUpdate(sources.guid, party.party1, arenaTargetedBy1Frame);
  observeAndUpdate(sources.guid, party.party2, arenaTargetedBy2Frame);

  function observeAndUpdate(
    unitGuidS: Source<WOWGUID>,
    partyUnit: sources["party1"],
    frame: myAuraFrame,
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

        if (offensiveCooldownActive) {
          applyAuraToAuraframe(offensiveCooldownActive, frame);
          // frame.Border.SetVertexColor(255, 0, 0);
        } else {
          frame.icon.SetTexture(
            "Interface\\AddOns\\DefaultUIScript\\ClassIcons\\" +
            class_ +
            ".tga",
          );
          frame.icon.SetAllPoints(frame);
        }
      },
    );
  }

  return {
    arenaTargetedBy1Frame: arenaTargetedBy1Frame,
    arenaTargetedBy2Frame: arenaTargetedBy2Frame,
  };
}
