let timer;
/**
 * 节流原理：在一定时间内，只能触发一次
 */
function throttle(func: Function, wait = 500, immediate = true, flag = false) {
  if (immediate) {
    if (!flag) {
      flag = true;
      // 如果是立即执行，则在wait毫秒内开始时执行
      typeof func === 'function' && func();
      timer = setTimeout(() => {
        flag = false;
      }, wait);
    }
  } else {
    if (!flag) {
      flag = true;
      // 如果是非立即执行，则在wait毫秒内的结束处执行
      timer = setTimeout(() => {
        flag = false;
        typeof func === 'function' && func();
      }, wait);
    }
  }
}
export default throttle;
