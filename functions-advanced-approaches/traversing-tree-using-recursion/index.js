export const markFavorites = (tree, favorites) => {
  tree.isFavorite = favorites.includes(tree.id);
  tree.nodes.map(node => markFavorites(node, favorites));
  return tree;
}