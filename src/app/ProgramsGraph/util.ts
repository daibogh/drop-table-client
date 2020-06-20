type Program = {
  id: number
  name: string
  is_deleted: boolean
  disciplines: string[]
  rating: number
}
export const calculateGraphData = (data: Program[]) => {
  const result: {
    links: {
      source: string;
      target: string
    }[]
    nodes: { id: string; rating: number; x: string; y: string }[]
  } = {
    links: [],
    nodes: []
  };
  if (data.length === 0) {
    return result;
  };

  const linkDefault = {
    highlightColor: "blue",
    renderLabel: true,
    highlightFontWeight: "bold",
    semanticStrokeWidth: true,
    fontSize: 12
  };

  const links: { [key: string]: { id: string; rating: number }[] } = {};
  data.forEach((p, idx) => {
    const node = {
      id: p.name,
      rating: p.rating,
      x: Math.floor(Math.random() * 500),
      y: Math.floor(Math.random() * 500)
    };
    p.disciplines.forEach(d => {
      if (links[d]) {
        links[d].forEach((n) => {
          if (node.rating > n.rating) {
            result.links.push({
              ...linkDefault,
              source: n.id, target: node.id
            });
          } else {
            result.links.push({
              ...linkDefault,
              source: node.id, target: n.id
            });
          }

        });
      } else {
        links[d] = [node];
      }

    });
    result.nodes.push(node);
  });
  return result;
};