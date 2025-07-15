import { FilePenLine, Library, Cuboid, Component } from "lucide-react";

const HomeMenu = [
  {
    title: "Components",
    icon: null,
    links: [
      {
        href: "/elements",
        label: "Elements",
        icon: <Component className="size-3.5 ml-2" />,
      },
      {
        href: "/forms",
        label: "Login / Register Form",
        icon: <FilePenLine className="size-3.5 ml-2" />,
      },
    ],
  },
  {
    title: "UI Builder",
    icon: null,
    links: [
      {
        href: "/reactflow",
        label: "Reactflow",
        icon: <FilePenLine className="size-3.5 ml-2" />,
      },
    ],
  },
  {
    title: "Motion Dev",
    icon: <Library className="size-3.5 ml-2" />,
    links: [
      {
        href: "/motion/scrollwithtoc",
        label: "Scroll Animation with Table of Contents",
        icon: <Cuboid className="size-3.5 ml-2" />,
      },
      {
        href: "/motion/trackelementwithinviewport",
        label: "Track Element Within Viewport",
        icon: <Cuboid className="size-3.5 ml-2" />,
      },
      {
        href: "/motion/usetransform",
        label: "UseTransform Example",
        icon: <Cuboid className="size-3.5 ml-2" />,
      },
      {
        href: "/motion/layout",
        label: "Sliding Underline - Layout",
        icon: <Cuboid className="size-3.5 ml-2" />,
      },
      {
        href: "/motion/layoutexamples",
        label: "Layout Examples",
        icon: <Cuboid className="size-3.5 ml-2" />,
      },
      {
        href: "/motion/flexgrowsample",
        label: "Flex Grow Sample",
        icon: <Cuboid className="size-3.5 ml-2" />,
      },
    ],
  },
  {
    title: "Motion Hooks",
    icon: <Library className="size-3.5 ml-2" />,
    links: [
      {
        href: "/motion/usescroll",
        label: "Motion Hook => useScroll",
        icon: <Cuboid className="size-3.5 ml-2" />,
      },
    ],
  },
];

export default HomeMenu;
