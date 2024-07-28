let words = ['Madrid', 'rome', 'Milan', 'berlin'];

let filteredWords = words.filter(word => 
    word.toLowerCase().includes('m')
);

console.log(filteredWords);