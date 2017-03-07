// 移动端rem单位适配
(function () {
  window.onload = function () {
    new flexible(1080, 100)
  };

  window.onresize = function () {
    new flexible(1080, 100)
  };
})();
