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
