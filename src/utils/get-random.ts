function getRandom<T>(array: Array<T>, n: number) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]]; // hoán đổi
  }
  return copy.slice(0, n);
}

export default getRandom;
