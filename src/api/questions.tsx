const categoryMap: { [key: string]: number } = {
  "General Knowledge": 9,
  Books: 10,
  Film: 11,
  Music: 12,
  Television: 14,
  "Video Games": 15,
  "Board Games": 16,
  Science: 17,
  Computers: 18,
  Mathematics: 19,
  Mythology: 20,
  Sports: 21,
  Geography: 22,
  History: 23,
  Politics: 24,
  Art: 25,
  Celebrities: 26,
  Animals: 27,
  Vehicles: 28,
  Comics: 29,
  Gadgets: 30,
  "Japanese Anime": 31,
  "Cartoon & Animations": 32,
};


export async function getQuestions(number: number, category: string): Promise<any> {
  const res = await fetch(
    `https://opentdb.com/api.php?amount=${number}&category=${categoryMap[category]}&type=multiple`
  );

  const data = await res.json();
  if(data.response_code === 5) throw new Error('No questions found');

  return data.results;
}
