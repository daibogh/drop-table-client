import uniqBy from 'lodash/fp/uniqBy';
import { Program } from 'data/programs/model';

// type Program = {
//   id: number
//   name: string
//   is_deleted: boolean
//   disciplines: string[]
//   rating: number
//   category: string
// }
type Link = {
  source: string;
  target: string
}
const categoriesMap = new Map([
  ["Физика", "#f44336"],
  ["Математика", "#e91e63"],
  ["Биология", "#4caf50"],
  ["Медицина", "#009688"],
  ["Информатика", "#3f51b5"],
  ["Экология", "#8bc34a"],
  ["Экономика", "#00bcd4"],
  ["Химия", "#cddc39"],
  ["Социология", "#03a9f4"],
  ["Лингвистика", "#2196f3"],
  ["Филология", "#ffeb3b"],
  ["Философия", "#ffc107"],
  ["Риторика", "#ff9800"],
  ["Программирование", "#ff5722"],
  ["Политология", "#b71c1c"],
  ["Правоведение", "#880e4f"],
  ["Культурология", "#4a148c"],
  ["Геополитика", "#311b92"],
  ["Алгебра", "#006064"],
]);
export const calculateGraphData = (data: Program[]) => {
  const result: {
    links: Link[]
    nodes: { id: string; rating: number; x: number; y: number; size: number }[]
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
  const uniqueLinks: { [key: string]: number } = {};
  uniqBy((p) => p.name, data).forEach((p, idx) => {
    const node = {
      id: `${p.name} ${p?.is_deleted ? '(программа закрыта)' : ''}`,
      rating: p.rating,
      fontColor: p?.is_deleted ? 'red' : '#000',
      x: Math.floor(Math.random() * 500) + 1000,
      y: Math.floor(Math.random() * 500),
      size: 30000,
      color: categoriesMap.get(p.category) || '#009688'
    };
    ratingOverall += p.rating;
    p.disciplines.forEach(d => {
      if (links[d.name + d.category]) {
        links[d.name + d.category].forEach((n) => {
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
        links[d.name + d.category] = [node];
      }

    });
    result.nodes.push(node);
  });
  result.nodes.forEach((node, idx) => {
    node.size *= (node.rating / ratingOverall);
  });
  result.links = uniqBy(({ source, target }) => `${source}-${target}`, notUniqueLinks);
  console.log()
  return result;
};
