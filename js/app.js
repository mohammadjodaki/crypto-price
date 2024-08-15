setInterval(() => {
    update()
}, 30000);
const update = () => { 
const clonArr = []
fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
    .then(res => {
        if (res.ok) return res.json()
        return Promise.reject(err)
    })
    .then(data => {
        data.map((val, i) => {
            let temp = [val.market_cap, i, val.id]
            clonArr.push(temp)
        })

        clonArr.sort((a, b) => b[0] - a[0])
        const priceArr = []
        const nameArr = []
        clonArr.map((val) => {
            priceArr.push(val[0])
            nameArr.push(val[2])
        })

        const cryptoContainer = document.getElementById('crypto') 
        cryptoContainer.innerHTML = ''
        clonArr.forEach((item) => {  
            let row = document.createElement('div');  
            row.className = "grid grid-cols-5 text-center p-4 border-b border-gray-300 hover:bg-gray-50";  
        
            const marketCapChange = data[item[1]].market_cap_change_percentage_24h;  
            const changeColor = marketCapChange < 0 ? 'text-red-600' : 'text-green-600';  
        
            row.innerHTML = `  
                <div>${data[item[1]].market_cap_rank}</div>  
                <div>${data[item[1]].id}</div>  
                <div>$${data[item[1]].current_price.toLocaleString()}</div>  
                <div>$${data[item[1]].market_cap.toLocaleString()}</div>  
                <div class="${changeColor}">${marketCapChange}%</div> 
            `;  
          
            document.getElementById('crypto').appendChild(row);  
        });
    })
    .catch((err) => console.log(err))
}
    update()

