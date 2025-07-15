import { memo } from "react";

interface DefaultNodeProps {
  data: any;
  isConnectable: boolean | undefined;
}

// const DefaultNode = () => {
//   memo(({ data, isConnectable }: DefaultNodeProps) => {
//     return (
//       <>
//         <div className="flex flex-col border p-4 rounded-[5px]">
//           Custom Color Picker Node: <strong>{data.color}</strong>
//           <input
//             className="nodrag"
//             type="color"
//             onChange={data.onChange}
//             defaultValue={data.color}
//           />
//         </div>
//       </>
//     );
//   });
// };

const DefaultNode = ({ data, isConnectable }: DefaultNodeProps) => {
  return (
    <div className="flex flex-col border p-4 rounded-[5px]">
      Custom Color Picker Node: <strong>{data.color}</strong>
      <input
        className="nodrag"
        type="color"
        onChange={data.onChange}
        defaultValue={data.color}
      />
    </div>
  );
};
DefaultNode.displayName = "DefaultNode";

export default memo(DefaultNode);

//   <Handle
//     type="target"
//     position={Position.Left}
//     onConnect={(params) => console.log("handle onConnect", params)}
//     isConnectable={isConnectable}
//   />;

//         <Handle
//           type="source"
//           position={Position.Right}
//           id="a"
//           isConnectable={isConnectable}
//         />;
