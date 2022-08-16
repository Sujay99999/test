// alert('hello');

testingFunc = () => {
    let serverName = document.getElementById('Sname').value;
    let ticketID = document.getElementById('ticketID').value;
    console.log(serverName + ' ' + ticketID);

    $.ajax({
        type: "POST",
        url: "/test",
        data: JSON.stringify(serverName + ' ' + ticketID),
        contentType: "application/json",
        dataType: 'json',
        success: function (result) {
            document.getElementById('dynamic container').innerText = result.details;
        }
    });
}