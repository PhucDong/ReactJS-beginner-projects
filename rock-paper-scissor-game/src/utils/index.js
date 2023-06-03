export const getRandomGameItem = (gamesItems) => {
  const index = Math.floor(Math.random() * gamesItems.length);
  return gamesItems[index];
};

export const calculatorUserWinner = (userGameItem, computerGameItem) => {
  if (userGameItem.id === computerGameItem.id) return "Draw";
  else if (userGameItem.winItemIds.includes(computerGameItem.id)) return "Win";
  else return "Lost";
};
