"use client";
import DefaultNode from "@/components/reactflow/nodes/DefaultNode";
import {
  addEdge,
  Background,
  BackgroundVariant,
  Controls,
  MiniMap,
  ReactFlow,
  applyEdgeChanges,
  applyNodeChanges,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { use, useCallback, useState } from "react";

//#region //? initial values.
//TODO later get that values from db & zustand.
const nodeTypes = {
  selectorNode: DefaultNode,
};

const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
  {
    id: "3",
    position: { x: 0, y: 200 },
    data: { label: "Selecter Node" },
    type: "selectorNode",
  },
];

const initialEdges = [
  {
    id: "1e-2",
    source: "1",
    target: "2",
  },
];

//#endregion

let renderTime = 0;

export default function Page() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onNodesChange = useCallback(
    (changes: any) =>
      setNodes((oldNodes) => applyNodeChanges(changes, oldNodes)),
    []
  );

  const onEdgesChange = useCallback(
    (changes: any) =>
      setEdges((oldEdges) => applyEdgeChanges(changes, oldEdges)),
    []
  );

  console.log("rendered" + ++renderTime);
  return (
    <div className="w-screen h-screen">
      <ReactFlow
        nodes={nodes}
        nodeTypes={nodeTypes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Controls />
        <MiniMap />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
