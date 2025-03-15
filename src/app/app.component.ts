import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { AgentDetails } from './interfaces/environment.interface';
import { AgentNode } from './models/agent-node';
import { Link } from './models/link';
import { GraphComponent } from "./components/graph/graph.component";
import { D3Service } from './services/d3.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [GraphComponent],
  providers: [D3Service]
})
export class AppComponent {
  agents: AgentDetails[] = structuredClone(environment.agents);
  links: Link[] = [];
  nodes: AgentNode[] = this.agents.map(agent => new AgentNode(agent.id, agent));

  constructor() {
    this.nodes.forEach(agent => {
      this.nodes.filter(a => a.id !== agent.id &&
        agent.data.synergy.some(synergy => a.data[synergy.type] === synergy.value)
      ).forEach(a => {
        this.links.push(new Link(agent, a, 1));
      });
    });
  }


}
