function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

export const rows = [
  createData("< 15 years old", 159, 27),
  createData("20 - 35 years old", 237, 40),
  createData("40 - 50 years old", 262, 16),
  createData("> 50 years old", 305, 8),
];




function createDataTopChannels(socialMedia, visit, persentage, icon ) {
  return { socialMedia, visit, persentage, icon };
}

export const TopChannels = [
  createDataTopChannels('Facebook', 124, 12, 'assets/icons/socialmedia/Facebook.png'),
  createDataTopChannels('Instagram', 237, 14, 'assets/icons/socialmedia/YouTube.png'),
  createDataTopChannels('LinkedIn', 262, 14, 'assets/icons/socialmedia/Instagram.png'),
  createDataTopChannels('YouTube', 305, 19 ,'assets/icons/socialmedia/Likdelin.png'),
];