import { ElementRef, Injectable } from "@angular/core";
import { ForceDirectedGraph } from "../models/force-directed-graph";
import { Link } from "../models/link";
import { AgentNode } from "../models/agent-node";
import * as d3 from "d3";

@Injectable()
export class D3Service {
  constructor() {}

  /** A method to bind a pan and zoom behavior to an svg element */
  applyZoomableBehaviour(svgElement: any, containerElement: any) {
    let svg, container, zoomed, zoom;

    svg = d3.select(svgElement);
    container = d3.select(containerElement);

    zoomed = (event: any) => {
      const transform = event.transform;
      container.attr("transform", "translate(" + transform.x + "," + transform.y + ") scale(" + transform.k + ")");
    };

    zoom = d3.zoom().on("zoom", zoomed);
    svg.call(zoom);
  }

  /** A method to bind a draggable behavior to an svg element */
  applyDraggableBehaviour(element: any, node: AgentNode, graph: ForceDirectedGraph) {
    const d3element = d3.select(element);

    function started(event: any) {
      if (!event.active) {
        graph.simulation.alphaTarget(0.3).restart();
      }
    }

    function dragged(event: any) {
      node.fx = event.x;
      node.fy = event.y;
    }

    function ended(event: any) {
      if (!event.active) {
        graph.simulation.alphaTarget(0);
      }

      node.fx = null;
      node.fy = null;
    }

    const drag = d3.drag().on("start", started).on("drag", dragged).on("end", ended);

    d3element.call(drag);
  }

  /** The interactable graph to simulate.
   * This method does not interact with the document, purely physical calculations.
   */
  getForceDirectedGraph(nodes: AgentNode[], links: Link[], options: { width: number, height: number }) {
    return new ForceDirectedGraph(nodes, links, options);
  }
}