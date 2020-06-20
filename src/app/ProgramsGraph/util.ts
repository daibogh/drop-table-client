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
    nodes: { id: string; rating: number }[]
  } = {
    links: [],
    nodes: []
  }
  if (data.length === 0) {
    return result
  }
  const links: { [key: string]: { id: string; rating: number }[] } = {}
  data.forEach((p, idx) => {
    const node = {
      id: p.name,
      rating: p.rating
    }
    p.disciplines.forEach(d => {
      if (links[d]) {
        links[d].forEach((n) => {
          if (node.rating > n.rating) {
            result.links.push({ source: n.rating, target: node.id })
          } else {
            result.links.push({ source: node.rating, target: n.id })
          }

        })
      } else {
        links[d] = [node]
      }

    })
    result.nodes.push(node)
  })
  return result
}