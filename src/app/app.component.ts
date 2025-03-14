import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';
import { AgentType } from './interface/environment.interface';

interface AgentLink {
  source: string;
  target: string;
  value: number;
};

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  agents: AgentType[] = structuredClone(environment.agents);
  links: AgentLink[] = [];

  constructor() {
    this.agents.forEach(agent => {
      agent.synergy.forEach(synergy => {
        var synergyAgent: AgentType[] = this.agents.filter(a => a[synergy.type] === synergy.value);
        synergyAgent.forEach(a => {
          this.links.push({source: agent.id, target: a.id, value: 1});
        });
      });
    });

    // Draw the graph.
  }


}
