export interface environmentInterface {
    agents: AgentType[];
}

export interface AgentType {
    id: string;
    image: string;
    rarity: "S"|"A";
    attribute: AttributeType;
    specialty: SpecialtyType;
    damage: DamageType[];
    faction: FactionType;
    assist: AssistType;
    synergy: SynergyType[];
};

export interface SynergyType {
    type: keyof AgentType;
    value: AttributeType|SpecialtyType|DamageType|FactionType|AssistType;
};

export type AttributeType = "Electric"|"Physical"|"Ether"|"Fire"|"Ice";
export type SpecialtyType = "Support"|"Stun"|"Attack"|"Defense"|"Anomaly";
export type DamageType = "Slash"|"Pierce"|"Strike";
export type FactionType = "Victoria Housekeeping Co."|"Cunning Hares"|"Belobog Heavy Industries"|"Hollow Special Operations Section 6"|"Stars of Lyra"|"Sons of Calydon"|"Criminal Investigation Special Response Team"|"Obol Squad";
export type AssistType = "Defensive"|"Evasive";