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

export type EquipmentSlot = (typeof EQUIPMENT_SLOTS)[number];

export interface SlotEntry {
  type: "ITEM" | "KIT";
  id: number;
}

export interface Appearance {
  schemaVersion: 1;
  displayName: string;
  gender: 0 | 1;
  equipment: Partial<Record<EquipmentSlot, SlotEntry>>;
  bodyColors: [number, number, number, number, number];
  npcTransformId: number | null;
  idlePoseAnimation: number | null;
  capturedAt: string; // ISO-8601 UTC
}
