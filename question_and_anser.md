<div align ="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

-   A: `{}`
-   B: `ReferenceError: greetign is not defined`
-   C: `undefined`

<details><summary><b>B: ReferenceError: greetign is not defined</b></summary>
<p>

#### Answer: ?

<i>In the code provided there is a typographical error in the variable name. It is declared as "greeting" but then assigned as "greetign" with a typo. JavaScript is case-sensitive, so "greeting" and "greetign" are treated as different variables. Since "greetign" is not defined anywhere in the code</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
    return a + b;
}

sum(1, "2");
```

-   A: `NaN`
-   B: `TypeError`
-   C: `"12"`
-   D: `3`

<details><summary><b>A: NaN</b></summary>
<p>

#### Answer: ?

<i>In the provided code, the sum function is designed to add two numbers together. However, when you call sum(1, "2"), you are trying to add a number (1) and a string ("2"). JavaScript will attempt to perform type coercion and convert the string to a number, but if the conversion is not straightforward, it results in a NaN (Not-a-Number) value. In this case, adding a number and a string is not straightforward, so the result is NaN.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

-   A: `['🍕', '🍫', '🥑', '🍔']`
-   B: `['🍝', '🍫', '🥑', '🍔']`
-   C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
-   D: `ReferenceError`

<details><summary><b>A: ['🍕', '🍫', '🥑', '🍔']</b></summary>
<p>

#### Answer: ?

<i> In the code, info.favoriteFood initially references the first element of the food array, which is "🍕". However, when you later assign "🍝" to info.favoriteFood, it doesn't modify the food array in any way. So, when you log the food array, it remains unchanged, and the output is ['🍕', '🍫', '🥑', '🍔']</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
    return `Hi there, ${name}`;
}

console.log(sayHi());
```

-   A: `Hi there,`
-   B: `Hi there, undefined`
-   C: `Hi there, null`
-   D: `ReferenceError`

<details><summary><b>B: Hi there, undefined</b></summary>
<p>

#### Answer: ?

<i>In the sayHi function, there is a parameter name, but when you call sayHi() without passing any argument, name is undefined inside the function. Therefore, the function returns "Hi there, undefined" where "undefined" is the value of the name parameter in this context</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
    if (num) count += 1;
});

console.log(count);
```

-   A: 1
-   B: 2
-   C: 3
-   D: 4

<details><summary><b>C: 3</b></summary>
<p>

#### Answer: ?

<i>The forEach method iterates over each element in the nums array. In this case, the condition if (num) checks whether each element is truthy. Since the elements in the array are [0, 1, 2, 3], all of them except 0 are considered truthy. Therefore, the count variable is incremented for each truthy element. It increments three times for the elements 1, 2, and 3, resulting in a final value of 3 for count</i>

</p>
</details>
