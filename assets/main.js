$(function() {
//url: 'https://www.codeschool.com/users/yana_bartzi.json',
  // your code will go here
  $.ajax({
  url: 'https://www.codeschool.com/users/yana_bartzi.json',
  dataType: 'jsonp',
  success: function(response) {
    myCompletedCourses(response.courses.completed);
  }
  });

  function myCompletedCourses(courses) {

    courses.forEach (function (course) {
      //console.log(course);
      var myCourses = $('<div />',{'class' : 'course'}).appendTo('#badges');

      $('<h3 />',{ text : course.title }).appendTo(myCourses);

      $('<img />',{ src : course.badge }).appendTo(myCourses);

      $('<a />',{ href : course.url, target : '_blank', 'class' : 'btn btn-primary', text : 'See Course' }).appendTo(myCourses);

    })
  }

});
