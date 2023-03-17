// // DESCRIPTION:
// // An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// // Example: (Input --> Output)

// // "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// // isIsogram "Dermatoglyphics" = true
// // isIsogram "moose" = false
// // isIsogram "aba" = false

// //------------------------------ My Solution ------------------------------

// // первоначально проверка на пустую строку

// //запускаем цикл для строки,затем приводим все символы в нижний регистр, строка ВСЕГДА будет разбита на массив с 2мя и более элементами, т.к. мы точно знаем что разделитель  element есть
// // даже если вначале он стоит - то первый элемент будет пустой а дальше строка будет разбиваться в зависимости от количества символа-разделителя
// // так проходим по всей строке. После этого берем длину получившегося массива и сравниваем больше ли он 2 
// // (т.к. у нас при отсутствии повторения будет только 2 элемента) - если больше - переходим дальше в цикл и возвращаем false. Если меньше или равно - выходим из цикла и возвращаем true 
// function isIsogram(str) {
//   if (str === '') {
//     return true;
//   };
//   for (let element of str) {
//     console.log(str.split(element));
//     if (str.toLowerCase().split(element).length > 2) {
//       return false;
//     };
//   };

//   return true;
// }

// //------------------------------Solution 1------------------------------

// function isIsogram(str){
// 	return new Set(str.toUpperCase()).size == str.length;
// }

// //------------------------------Solution 2------------------------------

// //проверить сколько раз повторяются буквы в строке. Возрашает true если повторяются и false если нет.
// function charCheck(str) {

//   for (i = 0; i < str.length; i++) {
//     console.log(str.split(str[i]));
//     if (str.toLowerCase().split(str[i]).length > 2) {
//       return false;
//     }
//   }
//   return true;

// }