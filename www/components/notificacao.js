// This is a JavaScript file
$(document).on('click','#notifi',function(){
  navigator.notification.alert("Eae parças");
})

function retorno()
{

}
$(document).on('click','#notifi2',function(){
  navigator.notification.alert("Segundo alerta",retorno,"Janela","Fechar");
});
function retorno2(buttonIndex)
{
  navigator.notification.alert("Botâo" + buttonIndex);
}
$(document).on('click','#notifi3',function(){
  navigator.notification.alert("Terceiro alerta",retorno2,"Janela","Fechar");
});

$(document).on('click','#beep',function(){
  navigator.notification.beep(40);
});

$(document).on('click','#vibrar',function(){
  navigator.notification.vibrate(6000);
});