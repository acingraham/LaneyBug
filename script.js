function date_diff_indays(date1, date2) {
  dt1 = new Date(date1);
  dt2 = new Date(date2);
  return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
}

const firstDate = new Date('Sep 7 2020');
const currentDate = new Date();
const dayNum = date_diff_indays(firstDate, currentDate);


const numToShow = 6;
const startIndex = dayNum * numToShow;
const $content = $('#content');

for(let i = startIndex; i < startIndex + numToShow; i++) {
  $content.append(tiktoks[i]);
}

/*
function render(picNum) {
	return `<img src="./img/${picNum}.jpg">`;
}

const picCount = 9;
const picNums = randomize(Array(picCount).fill().map((_, i) => i + 1));
console.log(picNums);

const fadeLength = 1000;
const messageLength = 10000;

const $content = $('#content');

let index = 0;
const item = render(picNums[index]);
$content.hide();
$content.html(item);
$content.fadeIn(fadeLength);

setInterval(function() {
	index = (index + 1) % picNums.length;
	const item = render(picNums[index]);
	$content.fadeOut(fadeLength, function() {
		$content.html(item);
	}).fadeIn(fadeLength);
}, messageLength);

function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

function randomize(arr) {
  for (let i = 0; i < arr.length; i++) {
    const randomIndex = Math.floor(Math.random() * (arr.length - i)) + i;
    swap(arr, i, randomIndex);
  }
  return arr;
}
*/