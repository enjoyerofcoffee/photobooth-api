export const EQUIPMENT_SLOTS = [
  "HEAD",
  "CAPE",
  "AMULET",
  "WEAPON",
  "TORSO",
  "SHIELD",
  "ARMS",
  "LEGS",
  "HAIR",
  "HANDS",
  "BOOTS",
  "JAW",
] as const;

export const SLOT_TYPE = ['ITEM','KITEN'] as const

export type EquipmentSlot = (typeof EQUIPMENT_SLOTS)[number];

export type SlotEntry = {
  type: "ITEM" | "KIT";
  id: number;
}

export type Appearance = {
  displayName: string,
  gender: 0 | 1,
  equipment: {
    type: EquipmentSlot, id: number,
  }
  bodyColors: [number,number,number,number,number]
  capturedAt: string; // ISO-8601 UTC
}
