
	let btn = document.getElementById('btn')
    let container = document.getElementById('container')
        
        
        
        
                    
        $.getJSON("https://api.ipify.org?format=json", function(data) {
            
            console.log(data.ip);
            $("#gfg").html(data.ip);
           
            const api = fetch(`https://ipinfo.io/${data.ip}/geo?token=4b0f95d0be9aa6`).then((res)=>{
                return res.json(); 
            }).then((data)=>{

                portal = data.postal
                loc = data.loc
                newlocARAR = loc.split(",")
                let lat = newlocARAR[0]
                let long = newlocARAR[1]
                console.log(lat,"   ",long);
                // console.log(arr.splice(6))
                document.getElementById('lat').innerText = lat
                 document.getElementById('city').innerText = data.city
                 document.getElementById('org').innerText = data.org
                 document.getElementById('long').innerText = long
                 document.getElementById('region').innerText = data.region
                 document.getElementById('host').innerText = location.hostname
                 document.getElementById('city').innerText = data.city
                 document.getElementById('frame').src = `https://www.google.com/maps/place?q=${loc}&output=embed`
                
                 document.getElementById('time').innerText = data.timezone
                 console.log(data.timezone);
                 document.getElementById('date').innerText =  new Date().toLocaleString("en-US", { timeZone: "America/Chicago" });

                document.getElementById('pin').innerText = data.postal
                
                const postal = fetch(`https://api.postalpincode.in/pincode/${data.postal}`).then((res)=>{
                return res.json(); 
            }).then((data)=>{
                console.log(data[0].Message)
            document.getElementById('message').innerText = data[0].Message
            let postal = document.getElementById('postal')
            data[0].PostOffice.map((d)=>{
                console.log(d)
                postal.innerHTML += `
                <div>
                <h4>Name: <span class="val">${d.Name}</span></h4>
                <h4>Branch Type: <span class="val">${d.BranchType}</span></h4>
                <h4>Delivery Status : <span class="val">${d.DeliveryStatus}</span></h4>
                <h4>District: <span class="val">${d.District}</span></h4>
                <h4>Division: <span class="val">${d.Division}</span></h4>
               </div>
                `
            })
        }
            )
            

            })
            }).catch((err)=>console.log(err))
        
     
   
     
    
    let ip = () =>{
       document.querySelector('.main_contain').style.display = "block"
    document.getElementById('btn').style.display = "none"
    }
          