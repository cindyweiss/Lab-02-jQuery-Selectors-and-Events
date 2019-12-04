'use strict';
const picarr = [];

function Pic(picObj) {
  this.title = picObj.title;
  this.description = picObj.description;
  this.keyWord = picObj.keyWord;
  this.horns = picObj.horns;
  this.image_url = picObj.image_url;
  picarr.push(this);
};

Pic.prototype.render = function () {
  const picTemplate = $('#pic-template').html();
  const $newSection = $('<section></section>');
  $newSection.html(picTemplate);
  $newSection.find('h2').text(this.title);
  $newSection.find('img').attr('src', this.image_url);
  $newSection.find('img').attr('alt', this.keyWord);
  $newSection.find('p').text(this.description);
  $('main').append($newSection);
};

$.get('./data/page-1.json', data => {
  data.forEach(pic => {
    new Pic(pic).render();
  });
});