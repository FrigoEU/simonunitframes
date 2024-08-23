/** @noSelfInFile */

import { isNil } from "../utils";

export type myAuraFrame = SimpleFrame & {
  // Comes from template, via parentKey
  icon: SimpleTexture;
  Count: SimpleFontString;
  Name: SimpleFontString;
  // Border: SimpleTexture;
  cooldown: SimpleFrame & CooldownFrame;
  borderF: ReturnType<typeof createBackdropTemplateFrame>;
};

export function createAuraFrame(
  name: string,
  parent: SimpleFrame,
  borderColor: null | { r: number; b: number; g: number },
  showCount: boolean
): myAuraFrame {
  const auraF = CreateFrame(
    "Button",
    name,
    parent,
    "SimonUnitFramesAuraFrame"
  ) as ReturnType<typeof createAuraFrame>;
  auraF.SetFrameStrata("HIGH");
  auraF.cooldown.SetDrawSwipe(true);
  auraF.cooldown.SetReverse(false);
  const swipecolor = { r: 0, g: 0, b: 0, a: 0.8 };
  auraF.cooldown.SetSwipeColor(
    swipecolor.r,
    swipecolor.g,
    swipecolor.b,
    swipecolor.a
  );

  if (showCount === false) {
    auraF.cooldown.SetHideCountdownNumbers(true);
  }

  // Zoom icon?
  auraF.icon.SetTexCoord(0.08, 0.92, 0.08, 0.92);
  auraF.borderF = createBackdropTemplateFrame(name + "Border", auraF);
  auraF.borderF.SetAllPoints(auraF);
  auraF.borderF.SetBackdrop(getStandardBorderBackdropObj());
  auraF.borderF.SetBackdropColor(0, 0, 0, 0);
  auraF.borderF.SetBackdropBorderColor(0, 0, 0, 1);

  // f:SetBackdrop({ bgFile = "Interface/DialogFrame/UI-DialogBox-Background-Dark", edgeFile = "Interface/Tooltips/UI-Tooltip-Border", tile = true, edgeSize = 10, tileSize = 10, insets = { left = 1, right = 1, top = 1, bottom = 1, }, })

  // if (!isNil(borderColor)) {
  //   auraF.Border.SetVertexColor(borderColor.r, borderColor.g, borderColor.b);
  //   auraF.Border.Show();
  // } else {
  //   auraF.Border.Hide();
  // }

  return auraF;
}

export function getStandardBorderBackdropObj() {
  return {
    bgFile: "Interface\\ChatFrame\\ChatFrameBackground",
    edgeFile: "Interface\\ChatFrame\\ChatFrameBackground",
    edgeSize: 2,
    tile: true,
    insets: { left: 0, right: 0, top: 0, bottom: 0 },
  };
}

export function applyAuraToAuraframe(
  aura: null | Pick<
    AuraData,
    "icon" | "duration" | "expirationTime" | "applications"
  >,
  auraF: myAuraFrame
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
        true
      );
      auraF.cooldown.Show();
    } else {
      CooldownFrame_Set(auraF.cooldown, 0, 0, false);
      auraF.cooldown.Hide();
    }

    // Stacks
    auraF.Count.SetText(
      aura.applications > 1 ? aura.applications.toString() : (null as any)
    );

    auraF.Show();
  }
}

export function createBackdropTemplateFrame(name: string, parent: SimpleFrame) {
  return CreateFrame(
    "Frame",
    name + "BorderContainer",
    parent,
    "BackdropTemplate"
  ) as SimpleFrame & {
    // Fixing missing typings
    SetBackdrop: (opts: {
      bgFile: string;
      edgeFile: string;
      tile: boolean;
      edgeSize: number;
      insets: { left: number; right: number; top: number; bottom: number };
    }) => void;
    GetBackdrop: () => {
      bgFile: string;
      edgeFile: string;
      tile: boolean;
      edgeSize: number;
      insets: { left: number; right: number; top: number; bottom: number };
    };
    SetBackdropColor: (r: number, g: number, b: number, a: number) => void;
    SetBackdropBorderColor: (
      r: number,
      g: number,
      b: number,
      a: number
    ) => void;
  };
}
