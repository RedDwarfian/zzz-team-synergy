import { AfterViewInit, Component, inject, Input, OnInit } from '@angular/core';
import { Link } from '../../models/link';
import { AgentNode } from '../../models/agent-node';
import { ForceDirectedGraph } from '../../models/force-directed-graph';
import { D3Service } from '../../services/d3.service';
import { AgentNodeVisualComponent } from '../agent-node-visual/agent-node-visual.component';
import { LinkVisualComponent } from '../link-visual/link-visual.component';
import { DraggableDirective } from '../../directives/draggable.directive';
import { ZoomableDirective } from '../../directives/zoomable.directive';

@Component({
  selector: 'graph',
  standalone: true,
  imports: [AgentNodeVisualComponent, LinkVisualComponent, ZoomableDirective, DraggableDirective],
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.scss'
})
export class GraphComponent implements OnInit, AfterViewInit {
  @Input() nodes: AgentNode[] = [];
  @Input() links: Link[] = [];
  private d3Service: D3Service = inject(D3Service);

  private _options: { width: number, height: number } = { width: 800, height: 600 };

  graph!: ForceDirectedGraph;

  ngOnInit() {
    this.graph = this.d3Service.getForceDirectedGraph(this.nodes, this.links, this.options);
  }

  ngAfterViewInit(): void {
    this.graph.initSimulation(this._options);
  }

  get options() {
    return this._options = {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
}
