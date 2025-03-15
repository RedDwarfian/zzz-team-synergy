import { Directive, ElementRef, inject, Input } from '@angular/core';
import { AgentNode } from '../models/agent-node';
import { ForceDirectedGraph } from '../models/force-directed-graph';
import { D3Service } from '../services/d3.service';

@Directive({
  selector: '[draggableNode]',
  standalone: true
})
export class DraggableDirective {
  @Input('draggableNode') draggableNode!: AgentNode;
  @Input('draggableInGraph') draggableInGraph!: ForceDirectedGraph;
  private d3Service: D3Service = inject(D3Service);

  constructor(private _element: ElementRef) { }

  ngOnInit() {
    this.d3Service.applyDraggableBehaviour(this._element.nativeElement, this.draggableNode, this.draggableInGraph);
  }
}
