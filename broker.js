var mosca = require ('mosca')

var pubsubsettings = {
	type: 'mongo',
	url: 'mongodb://localhost:27017/forMqtt',
    pubsubCollection: 'controlDevice',
    mongo: {}
}

var settings = {
		port:3000,
		backend: pubsubsettings,
		}

var server = new mosca.Server(settings);

server.on('ready', function(){
    console.log("ready");
});



server.on('clientConnected', function(client) {
	console.log('client connected', client.id)
})


server.on('published', function(packet, client) {
    console.log('Published : ', packet.payload)
})


server.on('subscribed', function(topic, client) {
	console.log('subscribed : ', topic)
})


server.on('unsubscribed', function(topic, client) {
	console.log('unsubscribed : ', topic)
})


server.on('clientDisconnecting', function(client) {
	console.log('clientDisconnecting : ', client.id)
})


server.on('clientDisconnected', function(client) {
	console.log('clientDisconnected : ', client.id)
})
