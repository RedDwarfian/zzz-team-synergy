import { EventEmitter } from '@angular/core';
import { Link } from './link';
import { AgentNode } from './agent-node';
import * as d3 from 'd3';

const FORCES = {
    LINKS: 1 / 100,
    COLLISION: 1,
    CHARGE: -100
};

export class ForceDirectedGraph {
    public ticker: EventEmitter<d3.Simulation<AgentNode, Link>> = new EventEmitter();
    public simulation!: d3.Simulation<any, any>;

    public nodes: AgentNode[] = [];
    public links: Link[] = [];

    constructor(nodes: AgentNode[], links: Link[], options: { width: number, height: number }) {
        this.nodes = nodes;
        this.links = links;

        this.initSimulation(options);
    }

    initNodes() {
        if (!this.simulation) {
            throw new Error('simulation was not initialized yet');
        }

        this.simulation.nodes(this.nodes);
    }

    initLinks() {
        if (!this.simulation) {
            throw new Error('simulation was not initialized yet');
        }

        this.simulation.force('links',
            d3.forceLink(this.links)
                .strength(FORCES.LINKS)
        );
    }

    initSimulation(options: any) {
        if (!options || !options.width || !options.height) {
            throw new Error('missing options when initializing simulation');
        }

        /** Creating the simulation */
        if (!this.simulation) {
            const ticker = this.ticker;
            
            // Creating the force simulation and defining the charges
            this.simulation = d3.forceSimulation()
            .force("charge",
                d3.forceManyBody()
                    .strength(FORCES.CHARGE)
            );

            // Connecting the d3 ticker to an angular event emitter
            this.simulation.on('tick', function () {
                ticker.emit(this);
            });

            this.initNodes();
            this.initLinks();
        }

        /** Updating the central force of the simulation */
        this.simulation.force("centers", d3.forceCenter(options.width / 2, options.height / 2));

        /** Restarting the simulation internal timer */
        this.simulation.restart();
    }
}