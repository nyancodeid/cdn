/*
 * Author: Abdullah A Almsaeed
 * Date: 4 Jan 2014
 * Description:
 *      This is a demo file used only for the main dashboard (index.html)
 **/

$(function () {

  "use strict";

  //Make the dashboard widgets sortable Using jquery UI
  try {
    $(".connectedSortable").sortable({
      placeholder: "sort-highlight",
      connectWith: ".connectedSortable",
      handle: ".box-header, .nav-tabs",
      forcePlaceholderSize: true,
      zIndex: 999999
    });
    $(".connectedSortable .box-header, .connectedSortable .nav-tabs-custom").css("cursor", "move");
  } catch (err) {
    
  }

  //jQuery UI sortable for the todo list
  try {
    $(".todo-list").sortable({
      placeholder: "sort-highlight",
      handle: ".handle",
      forcePlaceholderSize: true,
      zIndex: 999999
    });
  } catch (err) {
    
  }

  try {
    $('.daterange').daterangepicker({
      ranges: {
        'Today': [moment(), moment()],
        'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        'Last 7 Days': [moment().subtract(6, 'days'), moment()],
        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
      },
      startDate: moment().subtract(29, 'days'),
      endDate: moment()
    }, function (start, end) {
      window.alert("You chose: " + start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    });
  } catch (err) {
    
  }

  /* jQueryKnob */
  try {
    $(".knob").knob();
  } catch (err) {
    
  }

  //The Calender
  try {
    $("#calendar").datepicker();
  } catch (err) {
    
  }

  
  //Fix for charts under tabs
  try {
    $('.box ul.nav a').on('shown.bs.tab', function () {
      area.redraw();
      donut.redraw();
      line.redraw();
    });
  } catch (err) {
    
  }

  /* The todo list plugin */
  try {
    $(".todo-list").todolist({
      onCheck: function (ele) {
        window.console.log("The element has been checked");
        return ele;
      },
      onUncheck: function (ele) {
        window.console.log("The element has been unchecked");
        return ele;
      }
    });
  } catch (err) {
    
  }

});
