// Good Luck 💪🏾

function ZeroAndOne(arr) {
  let result = "";

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "Zero") {
      result += "0";
    } else if (arr[i] === "One") {
      result += "1";
    }
  }

  return result;
}

// Example usages:
console.log(ZeroAndOne(["one", "Zero", "Zero", "One"])); // Output: "001"
console.log(ZeroAndOne(["Zero", "ONE", "one", "Zero"])); // Output: "00"

