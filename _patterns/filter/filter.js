$('.selector').on('click', function (e) {
  e.preventDefault();
  var catSelect = $(this).attr('id');
  console.log(catSelect);
  $('.selector').removeClass('selected-cat');
  $(this).addClass('selected-cat');
  $('#designer-list').removeClass('all');
  $('#designer-list').removeClass('branding');
  $('#designer-list').removeClass('illustration');
  $('#designer-list').removeClass('uxui');
  $('#designer-list').removeClass('webdesign');
  $('#designer-list').removeClass('motiongraphics');
  $('#designer-list').removeClass('photography');
  $('#designer-list').removeClass('print');
  $('#designer-list').addClass(catSelect);
});
