const $content = $('#content');
const $prev = $('#prev');
const $next = $('#next');
const firstDate = new Date('Sep 7 2020');
const currentDate = new Date();
const currentDayNum = date_diff_indays(firstDate, currentDate);
let dayNum = currentDayNum;
const numToShow = 6;


setContent(dayNum);

$prev.click(() => {
  if (dayNum <= 0) {
    return;
  }
  dayNum--;
  setContent(dayNum);
});

$($next).click(() => {
  if (dayNum >= currentDayNum) {
    return;
  }
  dayNum++;
  setContent(dayNum);
});

function date_diff_indays(date1, date2) {
  dt1 = new Date(date1);
  dt2 = new Date(date2);
  return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
}

function setContent(dayNum) {
  const startIndex = dayNum * numToShow;

  if (dayNum <= 0) {
    $prev.prop('disabled', true);
  } else {
    $prev.prop('disabled', false);
  }

  if (dayNum >= currentDayNum) {
    $next.prop('disabled', true);
  } else {
    $next.prop('disabled', false);
  }

  $content.empty();
  for(let i = startIndex; i < startIndex + numToShow; i++) {
    $content.append(tiktoks[i]);
  }
}
