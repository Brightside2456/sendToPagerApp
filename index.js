
function sendData()
{
    let recipientNum = document.getElementById("num_field").value
    let rMsg = document.getElementById("msg").value


    let message = rMsg
    let sender_id = 'Sefah'
    let api_key = 'tceoP0RO5ZkHHRp6Gw7YzSlJ9'
    let to = recipientNum
    fetch(`https://apps.mnotify.net/smsapi?key=${api_key}&to=${to}&msg=${message}&sender_id=${sender_id}`)
        .then(response => {
            if (response.ok){
                return response.json();
            }else
            {
                throw new Error('API request failed');
            }
        })
        .then(data => {
            //Process the response data here
            console.log(data);  //You can log the data to the console
        })
        .catch(error => {
            //Handle errors here
            console.error(error);
        });
}