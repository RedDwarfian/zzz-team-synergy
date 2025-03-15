import { Component, Input, OnInit } from '@angular/core';
import { AgentNode } from '../../models/agent-node';

@Component({
  selector: '[agentNodeVisual]',
  standalone: true,
  imports: [],
  templateUrl: './agent-node-visual.component.html',
  styleUrl: './agent-node-visual.component.scss'
})
export class AgentNodeVisualComponent implements OnInit {
  @Input('agentNodeVisual') node!: AgentNode;
  id: string = '';
  
  ngOnInit() {
    this.id = this.node.id.replace(/ /g, '_');
  }
}
