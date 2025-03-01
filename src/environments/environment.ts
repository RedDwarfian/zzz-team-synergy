import { environmentInterface } from "../app/interface/environment.interface";

export const environment: environmentInterface = {
    agents: [
        {
            name: "Alexandrina Sebastiane",
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
            name: "Anby Demara",
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
            name: "Anton Ivanov",
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
            name: "Asaba Harumasa",
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
            name: "Astra Yao",
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
            name: "Ben Bigger",
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
            name: "Billy Kid",
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
            name: "Burnice White",
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
            name: "Caesar King",
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
            name: "Corin Wickes",
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
            name: "Ellen Joe",
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
            name: "Evelyn Chevalier",
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
            name: "Grace Howard",
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
            name: "Hoshimi Miyabi",
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
            name: "Jane Doe",
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
            name: "Koleda Belobog",
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
            name: "Lighter",
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
            name: "Luciana de Montefio",
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
            name: "Nekomiya Mana",
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
            name: "Nicole Demara",
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
            name: "Piper Wheel",
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
            name: "Qingyi",
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
            name: "Seth Lowell",
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
            name: "Soldier 11",
            image: "assets/zzz/agent/Agent_Soldier_11_Icon.png",
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
            name: "Tsukishiro Yanagi",
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
            name: "Von Lycaon",
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
            name: "Zhu Yuan",
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