
const slider_open = document.getElementsByClassName("slider_open")[0];
const slider_close = document.getElementsByClassName("slider_open")[1];
const slider_box_window = document.getElementById("slider_box");

slider_open.addEventListener("click", () => {
  slider_box_window.classList.remove('slider_box_hide');
  slider_box_window.classList.add('slider_box_display');
});
slider_close.addEventListener("click", () => {
  slider_box_window.classList.add('slider_box_hide');
  slider_box_window.classList.remove('slider_box_display');
});

