import { AgentDetails } from "../interfaces/environment.interface";

export class AgentNode implements d3.SimulationNodeDatum {
    // Optional - defining optional implementation properties - required for relevant typing assistance
    index?: number;
    x?: number;
    y?: number;
    vx?: number;
    vy?: number;
    fx?: number | null;
    fy?: number | null;
    
    id: string;
    data: AgentDetails;
    
    constructor(id: string, data: AgentDetails) {
        this.id = id;
        this.data = data;
    }
}