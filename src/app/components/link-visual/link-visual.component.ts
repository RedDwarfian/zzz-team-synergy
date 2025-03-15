import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Link } from '../../models/link';
import { AgentNode } from '../../models/agent-node';

@Component({
  selector: '[linkVisual]',
  standalone: true,
  imports: [],
  templateUrl: './link-visual.component.html',
  styleUrl: './link-visual.component.scss'
})
export class LinkVisualComponent implements OnChanges {
  @Input('linkVisual') link!: Link;
  source!: AgentNode;
  target!: AgentNode;

  ngOnChanges(): void {
    this.source = this.link.source as AgentNode;
    this.target = this.link.target as AgentNode;
  }
}
