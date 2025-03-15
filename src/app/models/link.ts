import { AgentNode } from './agent-node';

export class Link implements d3.SimulationLinkDatum<AgentNode> {
  // Optional - defining optional implementation properties - required for relevant typing assistance
  index?: number;

  // Must - defining enforced implementation properties
  source: AgentNode | string | number;
  target: AgentNode | string | number;
  width: number;

  constructor(source: AgentNode | string | number, target: AgentNode | string | number, width: number) {
    this.source = source;
    this.target = target;
    this.width = width;
  }
}