// @ts-ignore
jQuery(function (e) {
  e(".gallery").each(function () {
    e(this).modaal({ type: "image" });
  }),
    e(".header-button").on("click", function () {
      e("body").toggleClass("open");
    });
});
