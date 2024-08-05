import { context } from "./context";
import { unitIsArena } from "./unit";

export function updateFriendlyFrameTargetedBy(
  context: context,
  unitThatChangedTarget: UnitId,
) {
  // Showing arena enemies (DPS) targetting our party
  if (unitIsArena(unitThatChangedTarget)) {
    for (let partymember of [
      "player" as const,
      "party1" as const,
      "party2" as const,
    ]) {
      if (UnitIsUnit(unitThatChangedTarget + "target", partymember)) {
        handleArenaTargetedParty(context, unitThatChangedTarget, partymember);
      }
    }
  }
}

function handleArenaTargetedParty(
  context: context,
  unitThatChangedTarget: UnitIdArena,
  target: "player" | "party1" | "party2",
) {
  if (context.arenaInfo) {
    const arenaInfo = context.arenaInfo[unitThatChangedTarget];
    const frameIndex: null | 1 | 2 = getArenaTargetFrameIndex(
      context.arenaInfo,
      unitThatChangedTarget,
    );
    if (frameIndex !== null) {
      context.unitFrames[target]?.arenaDps1TargetFrame.icon.SetTexture(
        arenaInfo?.icon,
      );
      context.unitFrames[target]?.arenaDps1TargetFrame.Show();
      for (let partymember of ["player", "party1", "party2"] as const) {
        if (partymember !== target) {
          context.unitFrames[partymember]?.arenaDps1TargetFrame.Hide();
        }
      }
    }
  }
}

function getArenaTargetFrameIndex(
  arenaInfo: NonNullable<context["arenaInfo"]>,
  unit: UnitIdArena,
): null | 1 | 2 {
  if (
    unit === "arena1" &&
    arenaInfo.arena1 &&
    arenaInfo.arena1.role !== "HEALER"
  ) {
    return 1;
  }
  if (unit === "arena2") {
    if (arenaInfo.arena1 && arenaInfo.arena1.role === "HEALER") {
      return 1;
    } else {
      return 2;
    }
  }

  if (unit === "arena3") {
    if (
      (arenaInfo.arena1 && arenaInfo.arena1.role === "HEALER") ||
      (arenaInfo.arena2 && arenaInfo.arena2.role === "HEALER")
    ) {
      return 2;
    } else {
      return null; // 3: we only support 2 frames
    }
  }
  return null;
}
