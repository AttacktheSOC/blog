import type { Block } from './blockTypes.js';
import type { BlockDB } from './blockDB.js';
declare function calculateBlockSize(elem: d3.Selection<SVGGElement, unknown, HTMLElement, any>, block: any, db: any): Promise<void>;
type ActionFun = typeof calculateBlockSize;
export declare function insertBlockPositioned(elem: any, block: Block, db: any): Promise<void>;
export declare function performOperations(elem: d3.Selection<SVGGElement, unknown, HTMLElement, any>, blocks: Block[], db: BlockDB, operation: ActionFun): Promise<void>;
export declare function calculateBlockSizes(elem: any, blocks: Block[], db: BlockDB): Promise<void>;
export declare function insertBlocks(elem: d3.Selection<SVGGElement, unknown, HTMLElement, any>, blocks: Block[], db: BlockDB): Promise<void>;
export declare function insertEdges(elem: any, edges: Block[], blocks: Block[], db: BlockDB, id: string): Promise<void>;
export {};
