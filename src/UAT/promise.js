function test() {
  return Promise.resolve({test: "one"})
    .then((result) => {
      console.log("first then", result);
      return {...result, test: "two"};
    })
    .then((result) => {
      console.log("second then", result);
      return {...result, test: "three"};
    });
}

async function useTest() {
  const n = await test();
  console.log("await end", n);
}

useTest();
