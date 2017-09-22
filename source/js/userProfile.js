$(document).ready(function() {
  $('#myTabs a[href="#tuesday"]').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
  });
  $('#myTabs a[href="#wednesday"]').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
  });
});
