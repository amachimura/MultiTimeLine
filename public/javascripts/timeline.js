// Client
$(function() {

  var socket = io.connect('http://localhost');

  socket.on('connect', function() {
    socket.emit('msg update');
  });

  $('#btn').click(function() {
    var message = $('#message');
    socket.emit('msg send', message.val());
  });

  $('#delete').click(function(){
    socket.emit('deleteDB');
  });

  socket.on('msg push', function (msg) {
    var date = new Date();
    $('#list').prepend($('<dt>' + date + '</dt><dd>' + msg + '</dd>'));
  });


  //�ڑ����ꂽ��DB�ɂ��郁�b�Z�[�W��\��
  socket.on('msg open', function(msg){
    //DB������ۂ�������
    if(msg.length == 0){
        return;
    } else {
      $('#list').empty();
      $.each(msg, function(key, value){
        $('#list').prepend($('<dt>' + value.date + '</dt><dd>' + value.message + '</dd>'));
      });  
    }
  });
 
  //DB�ɂ��郁�b�Z�[�W���폜�����̂ŕ\��������
  socket.on('db drop', function(){
    $('#list').empty();
  });
 
});
