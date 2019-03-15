$('.selector').on('click', function (e) {
  e.preventDefault();
  var catSelect = $(this).attr('id');
  $('#designer-list a').removeAttr('tabindex');
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
  if (catSelect != 'all') {
    $('#designer-list a:not(.' + catSelect + ')').attr('tabindex', '-1');
  }
});
