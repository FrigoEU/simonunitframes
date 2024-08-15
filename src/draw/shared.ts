/** @noSelfInFile */

import { isNil } from "../utils";

export type myAuraFrame = SimpleFrame & {
  // Comes from template, via parentKey
  icon: SimpleTexture;
  count: SimpleFontString;
  name: SimpleFontString;
  border: SimpleTexture;
  cooldown: SimpleFrame & CooldownFrame;
};

export function createAuraFrame(
  name: string,
  parent: SimpleFrame,
  borderColor: null | { r: number; b: number; g: number },
): myAuraFrame {
  const auraF = CreateFrame(
    "Button",
    name,
    parent,
    "GladiusExAuraFrame",
  ) as ReturnType<typeof createAuraFrame>;
  auraF.cooldown.SetDrawSwipe(true);
  auraF.cooldown.SetReverse(false);
  const swipecolor = { r: 0, g: 0, b: 0, a: 0.8 };
  auraF.cooldown.SetSwipeColor(
    swipecolor.r,
    swipecolor.g,
    swipecolor.b,
    swipecolor.a,
  );

  if (!isNil(borderColor)) {
    auraF.border.SetVertexColor(borderColor.r, borderColor.g, borderColor.b);
    auraF.border.Show();
  }
  return auraF;
}

export function applyAuraToAuraframe(
  aura: null | Pick<
    AuraData,
    "icon" | "duration" | "expirationTime" | "applications"
  >,
  auraF: myAuraFrame,
) {
  if (isNil(aura)) {
    auraF.Hide();
  } else {
    // Icon
    auraF.icon.SetTexture(aura.icon as any /* ? */);

    // Cooldown
    if (aura.duration > 0) {
      CooldownFrame_Set(
        auraF.cooldown,
        aura.expirationTime - aura.duration,
        aura.duration,
        1,
      );
      auraF.cooldown.Show();
    } else {
      CooldownFrame_Set(auraF.cooldown, 0, 0, 0);
      auraF.cooldown.Hide();
    }

    // Stacks
    auraF.count.SetText(
      aura.applications > 1 ? aura.applications.toString() : (null as any),
    );

    auraF.Show();
  }
}
