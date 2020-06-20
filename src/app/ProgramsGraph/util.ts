import uniqBy from 'lodash/fp/uniqBy'
type Program = {
  id: number
  name: string
  is_deleted: boolean
  disciplines: string[]
  rating: number
}
type Link = {
  source: string;
  target: string
}
export const calculateGraphData = (data: Program[]) => {
  const result: {
    links: Link[]
    nodes: { id: string; rating: number; x: string; y: string }[]
  } = {
    links: [],
    nodes: []
  };
  if (data.length === 0) {
    return result;
  };
  const notUniqueLinks: Link[] = [];
  const linkDefault = {
    highlightColor: "blue",
    // renderLabel: true,
    highlightFontWeight: "bold",
    semanticStrokeWidth: true,
    fontSize: 8
  };

  const links: { [key: string]: { id: string; rating: number }[] } = {};
  let ratingOverall = 0;
  const uniqueLinks: { [key: string]: number } = {}
  uniqBy((p) => p.name, data).forEach((p, idx) => {
    const node = {
      id: p.name,
      rating: p.rating,
      x: Math.floor(Math.random() * 500),
      y: Math.floor(Math.random() * 500),
      size: 10000
    };
    ratingOverall += p.rating
    p.disciplines.forEach(d => {
      if (links[d]) {
        links[d].forEach((n) => {
          if (node.rating > n.rating) {
            notUniqueLinks.push({
              ...linkDefault,
              source: n.id, target: node.id
            });
          } else {
            notUniqueLinks.push({
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
  result.nodes.forEach((node, idx) => {
    node.size *= (node.rating / ratingOverall)
  })
  result.links = uniqBy(({ source, target }) => `${source}-${target}`, notUniqueLinks)
  return result;
};