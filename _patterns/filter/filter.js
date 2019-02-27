$('.selector').on('click', function() {
  var catSelect = $(this).attr('id');

  $('#designer-list').removeClass('category-all');
  $('#designer-list').removeClass('category-branding');
  $('#designer-list').removeClass('category-illustration');
  $('#designer-list').removeClass('category-uiux');
  $('#designer-list').removeClass('category-web');
  $('#designer-list').removeClass('category-motion');
  $('#designer-list').removeClass('category-photography');
  $('#designer-list').addClass(catSelect);
});
