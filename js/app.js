/**
 * Created by binia on 14. 8. 20..
 */

var parseID='7Yx7vfAmpX4N61RSyFouWcU7LYBUlacqTmRDoIsN';
var parseRestKey='x5z1SZyuIJ4PPwHtMnbRkGGYo2MHFgGoVbj9x4X7';

$(document).ready(function(){
    getMessages();
    $("#send").click(function(){
        var username= $('input[name=username]').attr('value');
        var message= #('input[name=message]').attr('value');
        console.log(username)
        console.log('!'')
})
        $.ajax({
            url:'https://api.parse.com/1/classes/MessageBoard',
            headers: {
                'X-Parse-Application-Id' : parseID,
                'X-Parse-REST-API-Key' : parseRestKey
            },
            contentType : 'application/json',
            dataType : 'json',
            processData :'false',
            data : JSON.stringify({
                'username':username,
                'message' :message
            }),
            type : 'POST',
            success : function(){
                console.log('send');
                getMessages();
             },
            error:function(){
                console.log('error');
            }
        });
    });
})

function getMessages(){
    $.ajax({
        url: 'https://api.parse.com/1/classes/MessageBoard',
        hearder:{
            'X-Parse-Application-Id': parseID,
            'X-Parse-REST-API-Key': parseRestKey
        },
        contentType: 'application.json',
        dataType: 'json',
        type : 'GET',
        success : function(){
            console.log('get');
            updateView(data);
        },
        error: function(){
            console.log('error');
        }
    }):
}

function updateView(messages){
    var table=$('.table tbody');
    table.html('');
    $.each(messages.results, function(index, value){
        var trEl =
            $('<tr><td>'
                + value.username
                + '</td><td>'
                + value.message +
                '</td></tr>');
         table.append(trEl);
    });
    console.log(message);
}

