// Wrap every letter in a span
$('.ml3').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: true})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: function(el, i) {
      return 150 * (i+1)
    }
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


  var obj=$('#text');
  var text=obj.text();
  text=text.split("");
  var parsed="";
  obj.empty();
  for(var i=0; i<text.length; i++)
  {
  var tag=document.createElement('span');
  tag.setAttribute('class','vtag');
  tag.innerHTML=text[i];
  obj.append(tag);
  }
