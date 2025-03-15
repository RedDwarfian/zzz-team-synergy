import { environmentInterface } from "../app/interfaces/environment.interface";

export const environment: environmentInterface = {
    agents: [
        {
            id: "Alexandrina Sebastiane",
            image: "assets/zzz/agent/Agent_Alexandrina_Sebastiane_Icon.png",
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
            id: "Anby Demara",
            image: "assets/zzz/agent/Agent_Anby_Demara_Icon.png",
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
            id: "Anton Ivanov",
            image: "assets/zzz/agent/Agent_Anton_Ivanov_Icon.png",
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
            id: "Asaba Harumasa",
            image: "assets/zzz/agent/Agent_Asaba_Harumasa_Icon.png",
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
            id: "Astra Yao",
            image: "assets/zzz/agent/Agent_Astra_Yao_Icon.png",
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
            id: "Ben Bigger",
            image: "assets/zzz/agent/Agent_Ben_Bigger_Icon.png",
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
            id: "Billy Kid",
            image: "assets/zzz/agent/Agent_Billy_Kid_Icon.png",
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
            id: "Burnice White",
            image: "assets/zzz/agent/Agent_Burnice_White_Icon.png",
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
            id: "Caesar King",
            image: "assets/zzz/agent/Agent_Caesar_King_Icon.png",
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
            id: "Corin Wickes",
            image: "assets/zzz/agent/Agent_Corin_Wickes_Icon.png",
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
            id: "Ellen Joe",
            image: "assets/zzz/agent/Agent_Ellen_Joe_Icon.png",
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
            id: "Evelyn Chevalier",
            image: "assets/zzz/agent/Agent_Evelyn_Chevalier_Icon.png",
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
            id: "Grace Howard",
            image: "assets/zzz/agent/Agent_Grace_Howard_Icon.png",
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
            id: "Hoshimi Miyabi",
            image: "assets/zzz/agent/Agent_Hoshimi_Miyabi_Icon.png",
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
            id: "Jane Doe",
            image: "assets/zzz/agent/Agent_Jane_Doe_Icon.png",
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
            id: "Koleda Belobog",
            image: "assets/zzz/agent/Agent_Koleda_Belobog_Icon.png",
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
            id: "Lighter",
            image: "assets/zzz/agent/Agent_Lighter_Icon.png",
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
            id: "Luciana de Montefio",
            image: "assets/zzz/agent/Agent_Luciana_de_Montefio_Icon.png",
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
            id: "Nekomiya Mana",
            image: "assets/zzz/agent/Agent_Nekomiya_Mana_Icon.png",
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
            id: "Nicole Demara",
            image: "assets/zzz/agent/Agent_Nicole_Demara_Icon.png",
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
            id: "Piper Wheel",
            image: "assets/zzz/agent/Agent_Piper_Wheel_Icon.png",
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
            id: "Pulchra Fellini",
            image: "assets/zzz/agent/Agent_Pulchra_Fellini_Icon.png",
            rarity: "A",
            attribute: "Physical",
            specialty: "Stun",
            damage: ["Slash"],
            faction: "Sons of Calydon",
            assist: "Evasive",
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
            id: "Qingyi",
            image: "assets/zzz/agent/Agent_Qingyi_Icon.png",
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
            id: "Seth Lowell",
            image: "assets/zzz/agent/Agent_Seth_Lowell_Icon.png",
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
            id: "Soldier 0 - Anby",
            image: "assets/zzz/agent/Agent_Soldier_0_-_Anby_Icon.png",
            rarity: "S",
            attribute: "Electric",
            specialty: "Attack",
            damage: ["Slash"],
            faction: "Defense Force",
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
            id: "Soldier 11",
            image: "assets/zzz/agent/Agent_Soldier_11_Icon.png",
            rarity: "S",
            attribute: "Fire",
            specialty: "Attack",
            damage: ["Slash"],
            faction: "Defense Force",
            assist: "Defensive",
            synergy: [
                {
                    type: "attribute",
                    value: "Fire"
                },
                {
                    type: "faction",
                    value: "Defense Force"
                }
            ]
        },
        {
            id: "Soukaku",
            image: "assets/zzz/agent/Agent_Soukaku_Icon.png",
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
            id: "Trigger",
            image: "assets/zzz/agent/Agent_Trigger_Icon.png",
            rarity: "S",
            attribute: "Electric",
            specialty: "Stun",
            damage: ["Pierce"],
            faction: "Defense Force",
            assist: "Defensive",
            synergy: [
                {
                    type: "specialty",
                    value: "Attack"
                },
                {
                    type: "attribute",
                    value: "Electric"
                }
            ]
        },
        {
            id: "Tsukishiro Yanagi",
            image: "assets/zzz/agent/Agent_Tsukishiro_Yanagi_Icon.png",
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
            id: "Von Lycaon",
            image: "assets/zzz/agent/Agent_Von_Lycaon_Icon.png",
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
            id: "Zhu Yuan",
            image: "assets/zzz/agent/Agent_Zhu_Yuan_Icon.png",
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