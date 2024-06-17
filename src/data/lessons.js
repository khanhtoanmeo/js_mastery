const LESSON_1 = {
  uniqueKey: "l1",
  idx: 1,
  title: "Biến và hằng số",
  sections: [
    {
      uniqueKey: "l1s1",
      title: "Biến là gì?",
      explanation:
        "Biến trong lập trình là một tên đại diện cho một vùng lưu trữ trong bộ nhớ máy tính, được sử dụng để lưu trữ và quản lý dữ liệu trong quá trình thực thi chương trình. Giá trị của biến có thể thay đổi trong suốt thời gian chương trình chạy, cho phép chương trình thực hiện các thao tác tính toán, lưu trữ và truyền tải thông tin. Biến được khai báo với một tên duy nhất và có thể có kiểu dữ liệu cụ thể như số nguyên, số thực, chuỗi ký tự, v.v.",
    },
    {
      uniqueKey: "l1s2",
      title: "Các cách khai báo biến",
      explanation: `
Trong JavaScript, có ba cách chính để khai báo biến: var, let, và const. var là cách khai báo biến truyền thống với phạm vi toàn cục hoặc hàm, và biến được khai báo bằng var có thể bị hoisting, nghĩa là chúng được nâng lên đầu phạm vi trước khi mã được thực thi. Ngược lại, let được giới thiệu trong ES6 và có phạm vi khối lệnh, không bị hoisting như var, cho phép giá trị của biến thay đổi trong suốt thời gian thực thi chương trình. Cuối cùng, const cũng được giới thiệu trong ES6, tương tự như let, nó có phạm vi khối lệnh, nhưng giá trị của biến const không thể thay đổi sau khi được gán lần đầu. const thường được sử dụng để khai báo các hằng số hoặc các biến mà giá trị không thay đổi.`,
      examples: [
        "var age = 25;",
        "let name = 'Alice';",
        "const gender = 'male'",
      ],
      excercise:
        "Khai báo biến age với giá trị 25 và in giá trị của biến đó ra console",
    },
  ],
};

const LESSON_2 = {
  uniqueKey: "l2",
  idx: 2,
  title: "Xử lý object và biến",
  sections: [
    {
      uniqueKey: "l2s1",
      title: "Chuyển đổi kiểu dữ liệu",
      explanation: `
Chuyển đổi kiểu dữ liệu là quá trình thay đổi một giá trị từ kiểu dữ liệu này sang kiểu dữ liệu khác. Trong JavaScript, có hai loại chuyển đổi kiểu: chuyển đổi ngầm định (implicit) và chuyển đổi tường minh (explicit). Chuyển đổi ngầm định xảy ra khi JavaScript tự động thay đổi kiểu dữ liệu khi cần thiết, trong khi chuyển đổi tường minh yêu cầu lập trình viên sử dụng các hàm hoặc phương pháp cụ thể để thay đổi kiểu dữ liệu.
      `,
      examples: [
        "let num = 123;\nlet str = String(num); // '123'",
        "let bool = true;\nlet boolStr = String(bool); // 'true'",
      ],
      excercise:
        "Chuyển đổi một giá trị số thành chuỗi và in giá trị đó ra console",
    },
    {
      uniqueKey: "l2s2",
      title: "Toán tử và cách tính toán cơ bản",
      explanation: `
Toán tử là các ký hiệu đặc biệt được sử dụng để thực hiện các phép toán trên các giá trị hoặc biến. Trong JavaScript, có nhiều loại toán tử khác nhau như:
- Toán tử số học: + (cộng), - (trừ), * (nhân), / (chia), % (chia lấy dư)
- Toán tử so sánh: == (bằng), != (khác), === (bằng về cả giá trị và kiểu), !== (khác về cả giá trị và kiểu), > (lớn hơn), < (nhỏ hơn), >= (lớn hơn hoặc bằng), <= (nhỏ hơn hoặc bằng)
- Toán tử logic: && (và), || (hoặc), ! (phủ định)
- Toán tử gán: = (gán), += (cộng và gán), -= (trừ và gán), *= (nhân và gán), /= (chia và gán)
      `,
      examples: [
        "let a = 5;\nlet b = 3;\nlet sum = a + b; // 8",
        "let isEqual = (a === b); // false\nlet isGreater = (a > 3); // true",
      ],
      excercise:
        "Sử dụng các toán tử số học để tính tổng của hai số và in kết quả ra console",
    },
    {
      uniqueKey: "l2s3",
      title: "So sánh giá trị",
      explanation: `
So sánh giá trị trong JavaScript có thể được thực hiện bằng các toán tử so sánh để xác định mối quan hệ giữa hai giá trị. Các toán tử so sánh bao gồm:
- == (bằng): So sánh giá trị của hai biến, không xét kiểu dữ liệu.
- === (bằng về cả giá trị và kiểu): So sánh giá trị và kiểu dữ liệu của hai biến.
- != (khác): Kiểm tra xem hai giá trị có khác nhau không.
- !== (khác về cả giá trị và kiểu): Kiểm tra xem giá trị và kiểu dữ liệu của hai biến có khác nhau không.
- > (lớn hơn): Kiểm tra xem một giá trị có lớn hơn giá trị khác không.
- < (nhỏ hơn): Kiểm tra xem một giá trị có nhỏ hơn giá trị khác không.
- >= (lớn hơn hoặc bằng): Kiểm tra xem một giá trị có lớn hơn hoặc bằng giá trị khác không.
- <= (nhỏ hơn hoặc bằng): Kiểm tra xem một giá trị có nhỏ hơn hoặc bằng giá trị khác không.
      `,
      examples: [
        "let a = 5;\nlet b = '5';\nlet isEqual = (a == b); // true",
        "let isStrictEqual = (a === b); // false\nlet isGreater = (a > 3); // true",
      ],
      excercise:
        "Sử dụng toán tử so sánh để kiểm tra nếu một số lớn hơn số khác và in kết quả ra console",
    },
    {
      uniqueKey: "l2s4",
      title: "Xử lí object",
      explanation: `
Object trong JavaScript là một cấu trúc dữ liệu được sử dụng để lưu trữ các cặp key-value (cặp khóa-giá trị). Mỗi khóa trong object là một chuỗi và mỗi giá trị có thể là bất kỳ kiểu dữ liệu nào, bao gồm số, chuỗi, hàm, hoặc thậm chí là object khác.

Object cũng có thể chứa các phương thức, là các hàm thuộc về object đó.
      `,
      examples: [
        "let person = { name: 'Alice', age: 25, gender: 'female' };\nconsole.log(person.name); // 'Alice'",
        "person.height = 170;\nperson.age = 26;\ndelete person.gender;",
      ],
      excercise:
        "Khai báo một object đại diện cho một chiếc xe với các thuộc tính: nhãn hiệu, model, và năm sản xuất. In thuộc tính nhãn hiệu của object ra console",
    },
    {
      uniqueKey: "l2s5",
      title: "Xử lí mảng",
      explanation: `
Mảng (array) trong JavaScript là một cấu trúc dữ liệu dùng để lưu trữ danh sách các phần tử. Mảng có thể chứa các giá trị có kiểu dữ liệu khác nhau và các phần tử trong mảng được đánh số chỉ mục (index) bắt đầu từ 0.

Mảng còn có nhiều phương thức khác như map, filter, reduce giúp xử lý và biến đổi dữ liệu một cách linh hoạt.
      `,
      examples: [
        "let fruits = ['Apple', 'Banana', 'Cherry'];\nconsole.log(fruits[0]); // 'Apple'",
        "fruits.push('Orange');\nfruits.forEach(function(fruit) { console.log(fruit); });",
      ],
      excercise:
        "Khai báo một mảng chứa tên của 5 người bạn và in tên của người bạn thứ hai trong mảng ra console",
    },
  ],
};

const LESSON_3 = {
  uniqueKey: "l3",
  idx: 3,
  title: "Câu lệnh",
  sections: [
    {
      uniqueKey: "l3s1",
      title: "Câu lệnh If",
      explanation: `
Câu lệnh if trong JavaScript được sử dụng để thực thi một đoạn mã nếu một điều kiện được chỉ định là đúng. Nếu điều kiện là sai, bạn có thể sử dụng else để thực thi một đoạn mã khác.
      `,
      examples: [
        "let age = 18;\nif (age >= 18) {\n  console.log('Bạn đủ tuổi bầu cử.');\n} else {\n  console.log('Bạn chưa đủ tuổi bầu cử.');\n}",
        "let score = 85;\nif (score >= 90) {\n  console.log('A');\n} else if (score >= 80) {\n  console.log('B');\n} else {\n  console.log('C');\n}",
      ],
      excercise:
        "Viết câu lệnh if để kiểm tra nếu một số là số dương, số âm hoặc bằng không và in kết quả ra console",
    },
    {
      uniqueKey: "l3s2",
      title: "Câu lệnh Switch",
      explanation: `
Câu lệnh switch được sử dụng để thực hiện một trong nhiều khối mã dựa trên giá trị của một biểu thức. Mỗi giá trị được gọi là một case, và bạn có thể sử dụng default để thực thi một khối mã nếu không có case nào khớp.
      `,
      examples: [
        "let day = 3;\nswitch (day) {\n  case 1:\n    console.log('Monday');\n    break;\n  case 2:\n    console.log('Tuesday');\n    break;\n  default:\n    console.log('Another day');\n}",
        "let fruit = 'apple';\nswitch (fruit) {\n  case 'banana':\n    console.log('Banana is yellow.');\n    break;\n  case 'apple':\n    console.log('Apple is red.');\n    break;\n  default:\n    console.log('Unknown fruit');\n}",
      ],
      excercise:
        "Viết câu lệnh switch để in tên ngày trong tuần dựa trên một số từ 1 đến 7",
    },
    {
      uniqueKey: "l3s3",
      title: "Vòng lặp For",
      explanation: `
Vòng lặp for trong JavaScript được sử dụng để lặp qua một khối mã một số lần xác định. Cú pháp của vòng lặp for bao gồm ba biểu thức tùy chọn: khởi tạo, điều kiện và bước lặp.
      `,
      examples: [
        "for (let i = 0; i < 5; i++) {\n  console.log('Number ' + i);\n}",
        "let sum = 0;\nfor (let i = 1; i <= 10; i++) {\n  sum += i;\n}\nconsole.log('Sum is ' + sum);",
      ],
      excercise: "Viết vòng lặp for để in các số từ 1 đến 10 ra console",
    },
    {
      uniqueKey: "l3s4",
      title: "Vòng lặp While",
      explanation: `
Vòng lặp while trong JavaScript được sử dụng để lặp qua một khối mã miễn là điều kiện được chỉ định là đúng. Nếu điều kiện trở thành sai, vòng lặp sẽ dừng lại.
      `,
      examples: [
        "let i = 0;\nwhile (i < 5) {\n  console.log('Number ' + i);\n  i++;\n}",
        "let sum = 0;\nlet num = 1;\nwhile (num <= 10) {\n  sum += num;\n  num++;\n}\nconsole.log('Sum is ' + sum);",
      ],
      excercise: "Viết vòng lặp while để in các số từ 1 đến 5 ra console",
    },
  ],
};

const LESSON_4 = {
  uniqueKey: "l4",
  idx: 4,
  title: "Hàm",
  sections: [
    {
      uniqueKey: "l4s1",
      title: "Tổng quan về hàm",
      explanation: `
Hàm trong JavaScript là một khối mã được thiết kế để thực hiện một nhiệm vụ cụ thể. Hàm có thể nhận các tham số và trả về một giá trị. Hàm giúp tái sử dụng mã và tổ chức mã tốt hơn.
      `,
      examples: [
        "function greet(name) {\n  return 'Hello ' + name;\n}\nconsole.log(greet('Alice')); // 'Hello Alice'",
        "function add(a, b) {\n  return a + b;\n}\nconsole.log(add(2, 3)); // 5",
      ],
      excercise: "Viết một hàm tính tổng hai số và trả về kết quả",
    },
    {
      uniqueKey: "l4s2",
      title: "Return trong hàm",
      explanation: `
Từ khóa return trong JavaScript được sử dụng để kết thúc việc thực hiện của một hàm và trả về giá trị từ hàm đó. Khi gặp return, hàm sẽ dừng lại và giá trị được trả về.
      `,
      examples: [
        "function square(x) {\n  return x * x;\n}\nconsole.log(square(4)); // 16",
        "function isEven(num) {\n  if (num % 2 === 0) {\n    return true;\n  }\n  return false;\n}\nconsole.log(isEven(3)); // false",
      ],
      excercise:
        "Viết một hàm kiểm tra xem một số có phải là số chẵn hay không và trả về kết quả",
    },
    {
      uniqueKey: "l4s3",
      title: "Các hàm xử lí object",
      explanation: `
JavaScript cung cấp nhiều phương thức để xử lý object như Object.keys(), Object.values(), Object.entries(), và Object.assign(). Những phương thức này giúp làm việc với các thuộc tính và giá trị của object một cách dễ dàng.
      `,
      examples: [
        "let person = { name: 'Alice', age: 25 };\nlet keys = Object.keys(person);\nconsole.log(keys); // ['name', 'age']",
        "let values = Object.values(person);\nconsole.log(values); // ['Alice', 25]",
      ],
      excercise:
        "Viết một hàm nhận vào một object và trả về mảng chứa tất cả các khóa của object đó",
    },
    {
      uniqueKey: "l4s4",
      title: "Các hàm xử lí mảng",
      explanation: `
JavaScript cung cấp nhiều phương thức để xử lý mảng như map(), filter(), reduce(), forEach(). Những phương thức này giúp làm việc với các phần tử trong mảng một cách dễ dàng và hiệu quả.
      `,
      examples: [
        "let numbers = [1, 2, 3, 4];\nlet doubled = numbers.map(n => n * 2);\nconsole.log(doubled); // [2, 4, 6, 8]",
        "let evenNumbers = numbers.filter(n => n % 2 === 0);\nconsole.log(evenNumbers); // [2, 4]",
      ],
      excercise:
        "Viết một hàm nhận vào một mảng số và trả về một mảng mới chứa các số chẵn",
    },
  ],
};

const LESSON_5 = {
  uniqueKey: "l5",
  idx: 5,
  title: "Object và class",
  sections: [
    {
      uniqueKey: "l5s1",
      title: "Object",
      explanation: `
Object trong JavaScript là một cấu trúc dữ liệu được sử dụng để lưu trữ các cặp key-value. Object có thể chứa nhiều loại giá trị khác nhau và cung cấp các phương thức để thao tác với dữ liệu.
      `,
      examples: [
        "let person = { name: 'Alice', age: 25, greet: function() { return 'Hello ' + this.name; } };\nconsole.log(person.greet()); // 'Hello Alice'",
        "let car = { brand: 'Toyota', model: 'Camry', year: 2020 };\nconsole.log(car.brand); // 'Toyota'",
      ],
      excercise:
        "Tạo một object đại diện cho một cuốn sách với các thuộc tính: tiêu đề, tác giả, và năm xuất bản. In tiêu đề của cuốn sách ra console",
    },
    {
      uniqueKey: "l5s2",
      title: "Thuộc tính và method của object",
      explanation: `
Object trong JavaScript có thể chứa các thuộc tính và phương thức. Thuộc tính là các biến lưu trữ giá trị, trong khi phương thức là các hàm được gắn liền với object.
      `,
      examples: [
        "let person = { name: 'Alice', age: 25, greet: function() { return 'Hello ' + this.name; } };\nconsole.log(person.greet()); // 'Hello Alice'",
        "let dog = { name: 'Buddy', bark: function() { return 'Woof!'; } };\nconsole.log(dog.bark()); // 'Woof!'",
      ],
      excercise:
        "Tạo một object đại diện cho một chiếc điện thoại với các thuộc tính: nhãn hiệu, model, và một phương thức để gọi điện. Gọi phương thức đó và in kết quả ra console",
    },
    {
      uniqueKey: "l5s3",
      title: "Cú pháp class",
      explanation: `
Class trong JavaScript là một mẫu để tạo các object. Class cung cấp một cách rõ ràng và ngắn gọn để định nghĩa các thuộc tính và phương thức của object.
      `,
      examples: [
        "class Person {\n  constructor(name, age) {\n    this.name = name;\n    this.age = age;\n  }\n  greet() {\n    return 'Hello ' + this.name;\n  }\n}\nlet alice = new Person('Alice', 25);\nconsole.log(alice.greet()); // 'Hello Alice'",
        "class Car {\n  constructor(brand, model) {\n    this.brand = brand;\n    this.model = model;\n  }\n  getInfo() {\n    return this.brand + ' ' + this.model;\n  }\n}\nlet myCar = new Car('Toyota', 'Camry');\nconsole.log(myCar.getInfo()); // 'Toyota Camry'",
      ],
      excercise:
        "Tạo một class đại diện cho một con vật với các thuộc tính: tên và loài. Thêm một phương thức để in ra 'Tên loài'. Tạo một đối tượng từ class này và gọi phương thức đó",
    },
    {
      uniqueKey: "l5s4",
      title: "OOP",
      explanation: `
Lập trình hướng đối tượng (OOP) là một mô hình lập trình dựa trên khái niệm về "objects", có thể chứa dữ liệu và mã để thao tác dữ liệu đó. Các nguyên tắc cơ bản của OOP bao gồm tính đóng gói, tính kế thừa, tính đa hình và tính trừu tượng.
      `,
      examples: [
        "class Animal {\n  constructor(name) {\n    this.name = name;\n  }\n  makeSound() {\n    console.log(this.name + ' makes a sound.');\n  }\n}\nclass Dog extends Animal {\n  makeSound() {\n    console.log(this.name + ' barks.');\n  }\n}\nlet dog = new Dog('Buddy');\ndog.makeSound(); // 'Buddy barks.'",
        "class Shape {\n  constructor(color) {\n    this.color = color;\n  }\n  draw() {\n    console.log('Drawing ' + this.color + ' shape.');\n  }\n}\nclass Circle extends Shape {\n  draw() {\n    console.log('Drawing ' + this.color + ' circle.');\n  }\n}\nlet circle = new Circle('red');\ncircle.draw(); // 'Drawing red circle.'",
      ],
      excercise:
        "Tạo một class đại diện cho một phương tiện với các thuộc tính: loại và màu sắc. Thêm một phương thức để in ra 'Loại phương tiện'. Tạo một class con kế thừa từ class phương tiện và ghi đè phương thức đó",
    },
  ],
};

const LESSON_6 = {
  uniqueKey: "l6",
  idx: 6,
  title: "Lập trình bất đồng bộ",
  sections: [
    {
      uniqueKey: "l6s1",
      title: "Khái niệm lập trình bất đồng bộ",
      explanation: `
Lập trình bất đồng bộ là một mô hình lập trình cho phép một đoạn mã tiếp tục thực thi trong khi chờ đợi một tác vụ khác hoàn thành, chẳng hạn như đọc tệp hoặc gọi API. Điều này giúp cải thiện hiệu suất và trải nghiệm người dùng.
      `,
      examples: [
        "setTimeout(() => {\n  console.log('This message is delayed by 1 second.');\n}, 1000);",
        "console.log('Start');\nsetTimeout(() => {\n  console.log('This runs after 2 seconds.');\n}, 2000);\nconsole.log('End');",
      ],
      excercise:
        "Viết một đoạn mã sử dụng setTimeout để in ra một thông điệp sau 3 giây",
    },
    {
      uniqueKey: "l6s2",
      title: "Promise trong Javascript",
      explanation: `
Promise là một đối tượng đại diện cho kết quả cuối cùng của một tác vụ bất đồng bộ, cho phép xử lý thành công hoặc thất bại của tác vụ đó một cách gọn gàng và dễ quản lý hơn.
      `,
      examples: [
        "let promise = new Promise((resolve, reject) => {\n  let success = true;\n  if (success) {\n    resolve('Success!');\n  } else {\n    reject('Failure!');\n  }\n});\npromise.then(result => console.log(result)).catch(error => console.log(error));",
        "function delay(ms) {\n  return new Promise(resolve => setTimeout(resolve, ms));\n}\ndelay(1000).then(() => console.log('Executed after 1 second'));",
      ],
      excercise:
        "Tạo một Promise để mô phỏng một tác vụ bất đồng bộ và xử lý kết quả của Promise đó bằng then và catch",
    },
    {
      uniqueKey: "l6s3",
      title: "Async/await trong Javascript",
      explanation: `
Async/await là cú pháp cho phép bạn viết mã bất đồng bộ theo cách trông giống như mã đồng bộ, giúp cải thiện tính dễ đọc và bảo trì của mã.
      `,
      examples: [
        "async function fetchData() {\n  let response = await fetch('https://api.example.com/data');\n  let data = await response.json();\n  console.log(data);\n}\nfetchData();",
        "function delay(ms) {\n  return new Promise(resolve => setTimeout(resolve, ms));\n}\nasync function asyncDelay() {\n  await delay(2000);\n  console.log('Executed after 2 seconds');\n}\nasyncDelay();",
      ],
      excercise:
        "Viết một hàm async sử dụng await để chờ một Promise hoàn thành trước khi in ra một thông điệp",
    },
  ],
};

const LESSON_7 = {
  uniqueKey: "l7",
  idx: 7,
  title: "Toán tử phá vỡ và chuỗi ngắn",
  sections: [
    {
      uniqueKey: "l7s1",
      title: "Toán tử phá vỡ (Destructuring)",
      explanation: `
Toán tử phá vỡ cho phép bạn trích xuất dữ liệu từ mảng hoặc đối tượng và gán chúng vào các biến riêng lẻ một cách ngắn gọn và rõ ràng.`,
      examples: [
        "let [a, b] = [1, 2];\nconsole.log(a); // 1\nconsole.log(b); // 2",
        "let {name, age} = {name: 'Alice', age: 25};\nconsole.log(name); // 'Alice'\nconsole.log(age); // 25",
      ],
      excercise:
        "Sử dụng toán tử phá vỡ để gán các phần tử của mảng ['red', 'green', 'blue'] vào các biến color1, color2, color3",
    },
    {
      uniqueKey: "l7s2",
      title: "Chuỗi ngắn (Short Circuiting)",
      explanation: `
Chuỗi ngắn trong JavaScript xảy ra khi các toán tử logic (&& và ||) được sử dụng để kiểm tra các biểu thức và ngừng đánh giá ngay khi kết quả được xác định. Toán tử && sẽ trả về giá trị đầu tiên nếu nó là false, nếu không sẽ trả về giá trị thứ hai. Toán tử || sẽ trả về giá trị đầu tiên nếu nó là true, nếu không sẽ trả về giá trị thứ hai.`,
      examples: [
        "console.log(false && 'Hello'); // false",
        "console.log(true || 'Hello'); // true",
        "console.log(null || 'default'); // 'default'",
      ],
      excercise:
        "Viết một ví dụ sử dụng chuỗi ngắn để gán giá trị mặc định cho một biến",
    },
  ],
};

const LESSON_8 = {
  uniqueKey: "l8",
  idx: 8,
  title: "Các toán tử khác trong JavaScript",
  sections: [
    {
      uniqueKey: "l8s1",
      title: "Toán tử Nullish Coalescing (??)",
      explanation: `
Toán tử Nullish Coalescing (??) được sử dụng để gán giá trị mặc định cho một biến nếu giá trị của nó là null hoặc undefined. Điều này hữu ích khi bạn muốn chắc chắn rằng biến của mình có một giá trị hợp lệ.`,
      examples: [
        "let foo = null ?? 'default';\nconsole.log(foo); // 'default'",
        "let bar = undefined ?? 'default';\nconsole.log(bar); // 'default'",
        "let baz = 0 ?? 'default';\nconsole.log(baz); // 0",
      ],
      excercise:
        "Sử dụng toán tử Nullish Coalescing để gán giá trị mặc định cho một biến nếu nó là null hoặc undefined",
    },
    {
      uniqueKey: "l8s2",
      title: "Toán tử gán logic",
      explanation: `
Toán tử gán logic bao gồm các toán tử như &&=, ||=, và ??= được sử dụng để gán giá trị cho một biến dựa trên điều kiện logic. Chúng giúp viết mã ngắn gọn và rõ ràng hơn.`,
      examples: [
        "let a = true;\na &&= false;\nconsole.log(a); // false",
        "let b = false;\nb ||= true;\nconsole.log(b); // true",
        "let c = null;\nc ??= 'default';\nconsole.log(c); // 'default'",
      ],
      excercise:
        "Sử dụng toán tử gán logic để gán giá trị cho một biến dựa trên điều kiện logic",
    },
  ],
};

const LESSON_9 = {
  uniqueKey: "l9",
  idx: 9,
  title: "Phương thức mảng đơn giản",
  sections: [
    {
      uniqueKey: "l9s1",
      title: "Phương thức mảng đơn giản",
      explanation: `
Các phương thức mảng đơn giản bao gồm những phương thức như push(), pop(), shift(), unshift(), và splice(). Chúng giúp thêm, xóa và thao tác các phần tử trong mảng một cách dễ dàng.`,
      examples: [
        "let fruits = ['Apple', 'Banana'];\nfruits.push('Orange');\nconsole.log(fruits); // ['Apple', 'Banana', 'Orange']",
        "let removed = fruits.pop();\nconsole.log(removed); // 'Orange'\nconsole.log(fruits); // ['Apple', 'Banana']",
      ],
      excercise:
        "Sử dụng phương thức push() để thêm một phần tử vào cuối mảng và phương thức pop() để xóa phần tử cuối cùng trong mảng",
    },
    {
      uniqueKey: "l9s2",
      title: "Phương thức mảng mới",
      explanation: `
JavaScript ES6 giới thiệu nhiều phương thức mảng mới như find(), findIndex(), includes(), và some(). Những phương thức này cung cấp cách tiện lợi để tìm kiếm và kiểm tra các phần tử trong mảng.`,
      examples: [
        "let numbers = [1, 2, 3, 4, 5];\nlet found = numbers.find(num => num > 3);\nconsole.log(found); // 4",
        "let includesThree = numbers.includes(3);\nconsole.log(includesThree); // true",
      ],
      excercise:
        "Sử dụng phương thức find() để tìm phần tử đầu tiên trong mảng lớn hơn 3 và phương thức includes() để kiểm tra xem mảng có chứa số 3 không",
    },
  ],
};

const LESSON_10 = {
  uniqueKey: "l10",
  idx: 10,
  title: "Vòng lặp và phương thức lặp mảng",
  sections: [
    {
      uniqueKey: "l10s1",
      title: "Phương thức forEach",
      explanation: `
Phương thức forEach() trong JavaScript được sử dụng để thực hiện một hàm cho mỗi phần tử trong mảng. Đây là một cách tiện lợi để lặp qua các phần tử trong mảng mà không cần sử dụng vòng lặp for truyền thống.`,
      examples: [
        "let fruits = ['Apple', 'Banana', 'Orange'];\nfruits.forEach(fruit => console.log(fruit));\n// 'Apple'\n// 'Banana'\n// 'Orange'",
      ],
      excercise:
        "Sử dụng phương thức forEach() để in ra từng phần tử trong mảng",
    },
    {
      uniqueKey: "l10s2",
      title: "Phương thức map, filter, và reduce",
      explanation: `
Các phương thức map(), filter(), và reduce() cung cấp các cách mạnh mẽ để biến đổi và thao tác với mảng. map() tạo ra một mảng mới bằng cách áp dụng hàm lên từng phần tử trong mảng gốc, filter() tạo ra một mảng mới chỉ chứa các phần tử thỏa mãn điều kiện nhất định, và reduce() tích lũy các giá trị của mảng thành một giá trị duy nhất.`,
      examples: [
        "let numbers = [1, 2, 3, 4];\nlet doubled = numbers.map(n => n * 2);\nconsole.log(doubled); // [2, 4, 6, 8]",
        "let evenNumbers = numbers.filter(n => n % 2 === 0);\nconsole.log(evenNumbers); // [2, 4]",
        "let sum = numbers.reduce((total, n) => total + n, 0);\nconsole.log(sum); // 10",
      ],
      excercise:
        "Sử dụng phương thức map() để nhân đôi các phần tử trong mảng, filter() để lọc các số chẵn và reduce() để tính tổng các phần tử trong mảng",
    },
  ],
};

const LESSON_11 = {
  uniqueKey: "l11",
  idx: 11,
  title: "Xử lý số trong JavaScript",
  sections: [
    {
      uniqueKey: "l11s1",
      title: "Chuyển đổi và kiểm tra số",
      explanation: `
JavaScript cung cấp nhiều phương thức để chuyển đổi và kiểm tra số, bao gồm parseInt(), parseFloat(), isNaN(), và isFinite(). Những phương thức này giúp xử lý và xác thực giá trị số một cách hiệu quả.`,
      examples: [
        "let str = '123';\nlet num = parseInt(str);\nconsole.log(num); // 123",
        "console.log(isNaN('abc')); // true",
      ],
      excercise:
        "Sử dụng parseInt() để chuyển đổi chuỗi '456' thành số và isNaN() để kiểm tra xem '123abc' có phải là số không",
    },
    {
      uniqueKey: "l11s2",
      title: "Math và làm tròn số",
      explanation: `
Đối tượng Math trong JavaScript cung cấp nhiều phương thức để thực hiện các phép toán số học và làm tròn số. Một số phương thức phổ biến bao gồm Math.round(), Math.ceil(), Math.floor(), và Math.random().`,
      examples: [
        "let num = 4.7;\nconsole.log(Math.round(num)); // 5",
        "console.log(Math.ceil(4.1)); // 5",
        "console.log(Math.floor(4.9)); // 4",
        "console.log(Math.random()); // Một số ngẫu nhiên giữa 0 và 1",
      ],
      excercise:
        "Sử dụng Math.round() để làm tròn số 7.4, Math.ceil() để làm tròn lên số 5.2, và Math.random() để tạo ra một số ngẫu nhiên",
    },
  ],
};

const LESSON_12 = {
  uniqueKey: "l12",
  idx: 12,
  title: "Xử lý ngày tháng trong JavaScript",
  sections: [
    {
      uniqueKey: "l12s1",
      title: "Tạo và định dạng ngày",
      explanation: `
Đối tượng Date trong JavaScript cho phép bạn làm việc với ngày và giờ. Bạn có thể tạo các đối tượng Date mới và sử dụng nhiều phương thức để lấy và thiết lập giá trị ngày và giờ.`,
      examples: [
        "let now = new Date();\nconsole.log(now); // Hiển thị ngày và giờ hiện tại",
        "let specificDate = new Date('2023-06-14');\nconsole.log(specificDate); // 'Wed Jun 14 2023'",
      ],
      excercise:
        "Tạo một đối tượng Date để đại diện cho ngày hiện tại và một đối tượng Date khác để đại diện cho ngày 01-01-2022",
    },
    {
      uniqueKey: "l12s2",
      title: "Phương thức Date và thao tác với ngày",
      explanation: `
Các phương thức của đối tượng Date bao gồm getDate(), getMonth(), getFullYear(), setDate(), setMonth(), và setFullYear(). Chúng giúp bạn lấy và thiết lập các giá trị ngày, tháng, và năm của đối tượng Date.`,
      examples: [
        "let date = new Date();\nconsole.log(date.getDate()); // Ngày hiện tại",
        "date.setFullYear(2025);\nconsole.log(date); // Ngày với năm được thiết lập thành 2025",
      ],
      excercise:
        "Sử dụng getDate(), getMonth(), và getFullYear() để lấy giá trị ngày, tháng, và năm hiện tại. Sử dụng setFullYear() để thiết lập năm thành 2030",
    },
  ],
};

export const lessons = [
  LESSON_1,
  LESSON_2,
  LESSON_3,
  LESSON_4,
  LESSON_5,
  LESSON_6,
  LESSON_7,
  LESSON_8,
  LESSON_9,
  LESSON_10,
  LESSON_11,
  LESSON_12,
];
