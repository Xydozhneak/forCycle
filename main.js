
arr = [];
//Task1
do {
count = prompt("how many numbers will be in the array?");
} while (isNaN(count))

for (i=0;i<count;i++){
    do {
    elem = +prompt(`Enter ${i+1} element of array`);
    } while (isNaN(elem));  
arr.push(elem);  
}
document.write(arr + "<br>");
//task2
for (u = 0; u < arr.length - 1; u++) {
    for (j = u + 1; j < arr.length; j++) {
      if (arr[u] > arr[j]) {
        temp = arr[u];
        arr[u] = arr[j];
        arr[j] = temp;
      }
    }
  }
document.write(arr + "<br>");
//task3
  arr.splice(1, 3);
document.write(arr + "<br>");
