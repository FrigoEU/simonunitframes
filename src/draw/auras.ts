/** @noSelfInFile */

import { isNil } from "../utils";

export type myAuraFrame = SimpleFrame & {
  // Comes from template, via parentKey
  icon: SimpleTexture;
  Count: SimpleFontString;
  Name: SimpleFontString;
  // Border: SimpleTexture;
  cooldown: SimpleFrame & CooldownFrame;
  // borderF: ReturnType<typeof createBackdropTemplateFrame>;
  setBorderColor: (border: null | { r: number; b: number; g: number }) => void;
  setBorderSize: (num: null | number) => void;
};

export function createAuraFrame(
  name: string,
  parent: SimpleFrame,
  opts: {
    defaultBorder: null | { r: number; b: number; g: number };
    borderSize?: number;
    showCount: boolean;
  }
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

  if (opts.showCount === false) {
    auraF.cooldown.SetHideCountdownNumbers(true);
  }

  // Zoom icon?
  auraF.icon.SetTexCoord(0.08, 0.92, 0.08, 0.92);
  const borderF = createBackdropTemplateFrame(name + "Border", auraF);
  borderF.SetAllPoints(auraF);
  borderF.SetBackdrop(
    getStandardBorderBackdropObj({ edgeSize: opts.borderSize ?? 2 })
  );
  borderF.SetBackdropColor(0, 0, 0, 0);

  const defaultBorder = opts.defaultBorder;
  if (!isNil(defaultBorder)) {
    borderF.SetBackdropBorderColor(
      defaultBorder.r,
      defaultBorder.g,
      defaultBorder.b,
      1
    );
  } else {
    borderF.SetBackdropBorderColor(0, 0, 0, 1);
  }

  auraF.setBorderColor = function (
    border: null | { r: number; b: number; g: number }
  ) {
    if (!isNil(border)) {
      borderF.SetBackdropBorderColor(border.r, border.g, border.b, 1);
    } else {
      if (!isNil(defaultBorder)) {
        borderF.SetBackdropBorderColor(
          defaultBorder.r,
          defaultBorder.g,
          defaultBorder.b,
          1
        );
      } else {
        borderF.SetBackdropBorderColor(0, 0, 0, 1);
      }
    }
  };

  auraF.setBorderSize = function (edgeSize: null | number) {
    if (edgeSize !== null) {
      getStandardBorderBackdropObj({ edgeSize: edgeSize });
    } else {
      getStandardBorderBackdropObj({ edgeSize: opts.borderSize ?? 2 });
    }
  };

  return auraF;
}

export function getStandardBorderBackdropObj(opts?: { edgeSize?: number }) {
  return {
    bgFile: "Interface\\ChatFrame\\ChatFrameBackground",
    edgeFile: "Interface\\ChatFrame\\ChatFrameBackground",
    edgeSize: opts?.edgeSize ?? 0,
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

export function hideAuraCooldownText(frame: myAuraFrame): void {
  (frame.cooldown as any).noCooldownCount = true; // so omniCC doesn't show anything
}
