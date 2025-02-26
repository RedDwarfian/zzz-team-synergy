import { environmentInterface } from "../app/interface/environment.interface";

export const environment: environmentInterface = {
    agents: [
        {
            name: "Alexandrina Sebastiane",
            rarity: "S",
            attribute: "Electric",
            specialty: "Support",
            damage: ["Strike"],
            faction: "Victoria Housekeeping Co.",
            assist: "Evasive",
            synergy: [
                {
                    type: "attribute",
                    value: "Electric"
                },
                {
                    type: "faction",
                    value: "Victoria Housekeeping Co."
                }
            ]
        },
        {
            name: "Anby Demara",
            rarity: "A",
            attribute: "Electric",
            specialty: "Stun",
            damage: ["Slash"],
            faction: "Cunning Hares",
            assist: "Defensive",
            synergy: [
                {
                    type: "attribute",
                    value: "Electric"
                },
                {
                    type: "faction",
                    value: "Cunning Hares"
                }
            ]
        },
        {
            name: "Anton Ivanov",
            rarity: "A",
            attribute: "Electric",
            specialty: "Attack",
            damage: ["Pierce"],
            faction: "Belobog Heavy Industries",
            assist: "Defensive",
            synergy: [
                {
                    type: "attribute",
                    value: "Electric"
                },
                {
                    type: "faction",
                    value: "Belobog Heavy Industries"
                }
            ]
        },
        {
            name: "Asaba Harumasa",
            rarity: "S",
            attribute: "Electric",
            specialty: "Attack",
            damage: ["Pierce", "Slash"],
            faction: "Hollow Special Operations Section 6",
            assist: "Defensive",
            synergy: [
                {
                    type: "specialty",
                    value: "Stun"
                },
                {
                    type: "specialty",
                    value: "Anomaly"
                }
            ]
        },
        {
            name: "Astra Yao",
            rarity: "S",
            attribute: "Ether",
            specialty: "Support",
            damage: ["Strike"],
            faction: "Stars of Lyra",
            assist: "Evasive",
            synergy: [
                {
                    type: "specialty",
                    value: "Attack"
                },
                {
                    type: "specialty",
                    value: "Anomaly"
                }
            ]
        },
        {
            name: "Ben Bigger",
            rarity: "A",
            attribute: "Fire",
            specialty: "Defense",
            damage: ["Strike"],
            faction: "Belobog Heavy Industries",
            assist: "Defensive",
            synergy: [
                {
                    type: "attribute",
                    value: "Fire"
                },
                {
                    type: "faction",
                    value: "Belobog Heavy Industries"
                }
            ]
        },
        {
            name: "Billy Kid",
            rarity: "A",
            attribute: "Physical",
            specialty: "Attack",
            damage: ["Pierce"],
            faction: "Cunning Hares",
            assist: "Evasive",
            synergy: [
                {
                    type: "attribute",
                    value: "Physical"
                },
                {
                    type: "faction",
                    value: "Cunning Hares"
                }
            ]
        },
        {
            name: "Burnice White",
            rarity: "S",
            attribute: "Fire",
            specialty: "Anomaly",
            damage: ["Pierce"],
            faction: "Sons of Calydon",
            assist: "Defensive",
            synergy: [
                {
                    type: "specialty",
                    value: "Anomaly"
                },
                {
                    type: "faction",
                    value: "Sons of Calydon"
                }
            ]
        },
        {
            name: "Caesar King",
            rarity: "S",
            attribute: "Physical",
            specialty: "Defense",
            damage: ["Slash", "Strike"],
            faction: "Sons of Calydon",
            assist: "Defensive",
            synergy: [
                {
                    type: "assist",
                    value: "Defensive"
                },
                {
                    type: "faction",
                    value: "Sons of Calydon"
                }
            ]
        },
        {
            name: "Corin Wickes",
            rarity: "A",
            attribute: "Physical",
            specialty: "Attack",
            damage: ["Slash"],
            faction: "Victoria Housekeeping Co.",
            assist: "Defensive",
            synergy: [
                {
                    type: "attribute",
                    value: "Physical"
                },
                {
                    type: "faction",
                    value: "Victoria Housekeeping Co."
                }
            ]
        },
        {
            name: "Ellen Joe",
            rarity: "S",
            attribute: "Ice",
            specialty: "Attack",
            damage: ["Slash"],
            faction: "Victoria Housekeeping Co.",
            assist: "Defensive",
            synergy: [
                {
                    type: "attribute",
                    value: "Ice"
                },
                {
                    type: "faction",
                    value: "Victoria Housekeeping Co."
                }
            ]
        },
        {
            name: "Evelyn Chevalier",
            rarity: "S",
            attribute: "Fire",
            specialty: "Attack",
            damage: ["Slash"],
            faction: "Stars of Lyra",
            assist: "Defensive",
            synergy: [
                {
                    type: "specialty",
                    value: "Stun"
                },
                {
                    type: "specialty",
                    value: "Support"
                }
            ]
        },
        {
            name: "Grace Howard",
            rarity: "S",
            attribute: "Electric",
            specialty: "Anomaly",
            damage: ["Pierce"],
            faction: "Belobog Heavy Industries",
            assist: "Evasive",
            synergy: [
                {
                    type: "attribute",
                    value: "Electric"
                },
                {
                    type: "faction",
                    value: "Belobog Heavy Industries"
                }
            ]
        },
        {
            name: "Hoshimi Miyabi",
            rarity: "S",
            attribute: "Ice",
            specialty: "Anomaly",
            damage: ["Slash"],
            faction: "Hollow Special Operations Section 6",
            assist: "Defensive",
            synergy: [
                {
                    type: "specialty",
                    value: "Support"
                },
                {
                    type: "faction",
                    value: "Hollow Special Operations Section 6"
                }
            ]
        },
        {
            name: "Jane Doe",
            rarity: "S",
            attribute: "Physical",
            specialty: "Anomaly",
            damage: ["Slash"],
            faction: "Criminal Investigation Special Response Team",
            assist: "Defensive",
            synergy: [
                {
                    type: "specialty",
                    value: "Anomaly"
                },
                {
                    type: "faction",
                    value: "Criminal Investigation Special Response Team"
                }
            ]
        },
        {
            name: "Koleda Belobog",
            rarity: "S",
            attribute: "Fire",
            specialty: "Stun",
            damage: ["Strike"],
            faction: "Belobog Heavy Industries",
            assist: "Defensive",
            synergy: [
                {
                    type: "attribute",
                    value: "Fire"
                },
                {
                    type: "faction",
                    value: "Belobog Heavy Industries"
                }
            ]
        },
        {
            name: "Lighter",
            rarity: "S",
            attribute: "Fire",
            specialty: "Stun",
            damage: ["Strike"],
            faction: "Sons of Calydon",
            assist: "Defensive",
            synergy: [
                {
                    type: "specialty",
                    value: "Attack"
                },
                {
                    type: "faction",
                    value: "Sons of Calydon"
                }
            ]
        },
        {
            name: "Luciana de Montefio",
            rarity: "A",
            attribute: "Fire",
            specialty: "Support",
            damage: ["Strike"],
            faction: "Sons of Calydon",
            assist: "Defensive",
            synergy: [
                {
                    type: "attribute",
                    value: "Fire"
                },
                {
                    type: "faction",
                    value: "Sons of Calydon"
                }
            ]
        },
        {
            name: "Nekomiya Mana",
            rarity: "S",
            attribute: "Physical",
            specialty: "Attack",
            damage: ["Slash"],
            faction: "Cunning Hares",
            assist: "Defensive",
            synergy: [
                {
                    type: "attribute",
                    value: "Physical"
                },
                {
                    type: "faction",
                    value: "Cunning Hares"
                }
            ]
        },
        {
            name: "Nicole Demara",
            rarity: "A",
            attribute: "Ether",
            specialty: "Support",
            damage: ["Strike"],
            faction: "Cunning Hares",
            assist: "Defensive",
            synergy: [
                {
                    type: "attribute",
                    value: "Ether"
                },
                {
                    type: "faction",
                    value: "Cunning Hares"
                }
            ]
        },
        {
            name: "Piper Wheel",
            rarity: "A",
            attribute: "Physical",
            specialty: "Anomaly",
            damage: ["Slash"],
            faction: "Sons of Calydon",
            assist: "Defensive",
            synergy: [
                {
                    type: "attribute",
                    value: "Physical"
                },
                {
                    type: "faction",
                    value: "Sons of Calydon"
                }
            ]
        },
        {
            name: "Qingyi",
            rarity: "S",
            attribute: "Electric",
            specialty: "Stun",
            damage: ["Strike"],
            faction: "Criminal Investigation Special Response Team",
            assist: "Defensive",
            synergy: [
                {
                    type: "specialty",
                    value: "Attack"
                },
                {
                    type: "faction",
                    value: "Criminal Investigation Special Response Team"
                }
            ]
        },
        {
            name: "Seth Lowell",
            rarity: "A",
            attribute: "Electric",
            specialty: "Defense",
            damage: ["Slash"],
            faction: "Criminal Investigation Special Response Team",
            assist: "Defensive",
            synergy: [
                {
                    type: "attribute",
                    value: "Electric"
                },
                {
                    type: "faction",
                    value: "Criminal Investigation Special Response Team"
                }
            ]
        },
        {
            name: "Soldier 11",
            rarity: "S",
            attribute: "Fire",
            specialty: "Attack",
            damage: ["Slash"],
            faction: "Obol Squad",
            assist: "Defensive",
            synergy: [
                {
                    type: "attribute",
                    value: "Fire"
                },
                {
                    type: "faction",
                    value: "Obol Squad"
                }
            ]
        },
        {
            name: "Soukaku",
            rarity: "A",
            attribute: "Ice",
            specialty: "Support",
            damage: ["Slash"],
            faction: "Hollow Special Operations Section 6",
            assist: "Defensive",
            synergy: [
                {
                    type: "attribute",
                    value: "Ice"
                },
                {
                    type: "faction",
                    value: "Hollow Special Operations Section 6"
                }
            ]
        },
        {
            name: "Tsukishiro Yanagi",
            rarity: "S",
            attribute: "Electric",
            specialty: "Anomaly",
            damage: ["Slash"],
            faction: "Hollow Special Operations Section 6",
            assist: "Defensive",
            synergy: [
                {
                    type: "specialty",
                    value: "Anomaly"
                },
                {
                    type: "faction",
                    value: "Hollow Special Operations Section 6"
                }
            ]
        },
        {
            name: "Von Lycaon",
            rarity: "S",
            attribute: "Ice",
            specialty: "Stun",
            damage: ["Strike"],
            faction: "Victoria Housekeeping Co.",
            assist: "Defensive",
            synergy: [
                {
                    type: "attribute",
                    value: "Ice"
                },
                {
                    type: "faction",
                    value: "Victoria Housekeeping Co."
                }
            ]
        },
        {
            name: "Zhu Yuan",
            rarity: "S",
            attribute: "Ether",
            specialty: "Attack",
            damage: ["Pierce"],
            faction: "Criminal Investigation Special Response Team",
            assist: "Evasive",
            synergy: [
                {
                    type: "specialty",
                    value: "Support"
                },
                {
                    type: "faction",
                    value: "Criminal Investigation Special Response Team"
                }
            ]
        }
    ]
}