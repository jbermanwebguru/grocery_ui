var x = 0,
velocity = 0,
moving = false,
dragInterval = null;

$("*[data-drag='true']").draggable({
  drag: function( event, ui )
  {    
    velocity = (ui.offset.left - x) * 2;
    ratio = parseInt( velocity * 100 / 360 );
    
    $(this).css('transform','rotateZ('+(ratio*2)+'deg)');
    
    x = ui.offset.left;
    
    console.log(velocity);
  },
  stop: function( event, ui )
  { 
    var _this = $(this);
        
    //    _this.css('-webkit-transition-duration','.5s');
    _this.css('left', ui.offset.left + velocity);
    _this.css('transform','rotateZ(0)');
    setTimeout(function()
    {
     _this.css('-webkit-transition-duration','');
     x = _this.css('left');
    },500);
  }
});
