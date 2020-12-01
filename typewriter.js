const sentence = "hello there from lighthouse labs";

let time = 0;
const typewriter = (cb) => {
  for (const char of sentence) {
    for (const letter of char) {
      setTimeout(() => {
        process.stdout.write(letter);
      }, time);
      time += 50;
    }
  }
  setTimeout(() => {
    cb();
  }, time + 50)
}

const callback = () => {
  console.log('\n');
}

// const result = typewriter(() => {
//   console.log('\n');
// })

typewriter(callback);