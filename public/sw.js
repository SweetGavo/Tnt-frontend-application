self.addEventListener('install',evt => {
    console.log("worker is installed");
})

self.addEventListener('message',evt =>{
    self.clients.matchAll({
        window:true,
        includeUncontrolled:true
    }).then(clients=>{
        if(clients && clients.length)
            clients[0].postMessage({message:"i am back here "});
    })
} );

