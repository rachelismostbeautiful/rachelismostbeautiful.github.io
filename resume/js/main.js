$(document).ready(function() {
  $("p").attr("contentEditable", "true");

  removeItem(true);
  $(".head").css({
    position: "relative"
  }).append(`<i class='icon-plus add'></i>`);

  $(".add").on("click", function(e) {
    if ($(this).parent()) {
      $(this).parent().next().append(`<p class="newP" style="position:relative" contenteditable="true">Hello</p>`);
    }
    removeItem(false);
  });

	$('.content-unit .title-add').on('click', function(e){
		let clone = $(this).parent().next();
			clone = clone.clone(true);
		$(this).parent().parent().append(clone);
	});

  function removeItem(first) {
    if (first) {
      $(".describe p, .award-item").css({
        position: "relative"
      }).append($(`<i class='icon-remove remove'></i>`));
      $(".remove").on("click", function() {
        this.parentNode.parentNode.removeChild(this.parentNode);
      });
    } else {
      if ($(".newP").find("i")) {
        $(".newP").find("i").remove();
      }
      $(".newP").append($(`<i class='icon-remove newRemove'></i>`));
      $(".newRemove").off("click");
      $(".newRemove").on("click", function(e) {
        this.parentNode.parentNode.removeChild(this.parentNode);
      });
    }
  }
});
