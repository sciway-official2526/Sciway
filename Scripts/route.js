/*********************************************************
 * DIJKSTRA (Shortest Time)
 * edges format:
 * {
 *   nodeId: [{ to: nodeId, weight: seconds }]
 * }
 *********************************************************/

function dijkstra(startId, endId) {
  const distances = {};
  const previous = {};
  const visited = new Set();
  const queue = [];

  // Initialize distances
  Object.keys(edges).forEach(node => {
    distances[node] = Infinity;
    previous[node] = null;
  });

  distances[startId] = 0;
  queue.push({ node: startId, dist: 0 });

  while (queue.length > 0) {
    // Get node with smallest distance
    queue.sort((a, b) => a.dist - b.dist);
    const { node: current } = queue.shift();

    if (visited.has(current)) continue;
    visited.add(current);

    if (current === endId) break;

    const neighbors = edges[current] || [];

    neighbors.forEach(({ to, weight }) => {
      const newDist = distances[current] + weight;

      if (newDist < distances[to]) {
        distances[to] = newDist;
        previous[to] = current;
        queue.push({ node: to, dist: newDist });
      }
    });
  }

  // Reconstruct path
  const path = [];
  let current = endId;

  while (current) {
    path.unshift(current);
    current = previous[current];
  }

  // If start is not reached, no route exists
  if (path[0] !== startId) return null;

  return path;
}
